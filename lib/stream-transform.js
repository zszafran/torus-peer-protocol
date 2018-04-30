/**
 * A module for adding two values.
 *
 * @module stream-transform
 */

const debug = require("debug")("torrent-peer-stream-transform");
const PeerMessageType = require("./peer-message-type");
const PeerBitfield = require("./peer-bitfield");
const PeerCancel = require("./peer-cancel");
const PeerChoke = require("./peer-choke");
const PeerExtended = require("./peer-extended");
const PeerHandshake = require("./peer-handshake");
const PeerHave = require("./peer-have");
const PeerInterested = require("./peer-interested");
const PeerKeepalive = require("./peer-keepalive");
const PeerNotInterested = require("./peer-notinterested");
const PeerPiece = require("./peer-piece");
const PeerPort = require("./peer-port");
const PeerRequest = require("./peer-request");
const PeerUnchoke = require("./peer-unchoke");

const { Transform } = require("stream");

const State = {
  HANDSHAKE_PENDING: "handshake-pending",
  HANDSHAKE_RECEIVING: "handshake-receiving",
  MESSAGE_PENDING: "message-pending",
  MESSAGE_RECEIVING: "message-receiving"
};

/**
 * Class
 *
 * @extends Transform
 */
class StreamTransform extends Transform {
  constructor() {
    super({
      readableObjectMode: true
    });

    this.init = false;
    this.chunks_ = [];
    this.queue_ = [];
    this.state_ = State.HANDSHAKE_PENDING;
    this.stateMap_ = new Map([
      [State.HANDSHAKE_PENDING, this.onHandshakePending_.bind(this)],
      [State.HANDSHAKE_RECEIVING, this.onHandshakeReceiving_.bind(this)],
      [State.MESSAGE_PENDING, this.onMessagePending_.bind(this)],
      [State.MESSAGE_RECEIVING, this.onMessageReceiving_.bind(this)]
    ]);
  }

  // waitForHandshake_() {
  //   this.wait_(1, buffer => {
  //     this.wait_(buffer.readUInt8(0) + 48, buffer => {
  //       this.push(PeerHandshake.from(buffer));
  //       process.nextTick(() => this.waitForMessage_());
  //     });
  //   });
  // }

  // waitForMessage_() {
  //   this.wait_(4, buffer => {
  //     this.wait_(buffer.readUInt32BE(0), buffer => {
  //       this.push(this.getMessage_(buffer));
  //       process.nextTick(() => this.waitForMessage_());
  //     });
  //   });
  // }

  /**
   * State when waiting for a handshake.
   *
   * @param {!Buffer} chunk
   * @return {!Promise<!State>}
   * @private
   */
  onHandshakePending_(chunk) {
    this.buffer_(chunk);

    this.wait_(1)
      .then(buffer => buffer.readUInt8(0))
      .then(size => this.wait_(size + 48))
      .then(data => PeerHandshake.from(data))
      .then(handshake => this.push(handshake))
      .then(() => this.end_())
      .catch(e => debug(e));

    return this.isComplete_()
      .then(() => State.MESSAGE_PENDING)
      .catch(() => State.HANDSHAKE_RECEIVING);
  }

  /**
   * State when receiving additional parts of a handshake.
   *
   * @param {!Buffer} chunk
   * @return {!Promise<!State>}
   * @private
   */
  onHandshakeReceiving_(chunk) {
    this.buffer_(chunk);

    return this.isComplete_()
      .then(() => State.MESSAGE_PENDING)
      .catch(() => State.HANDSHAKE_RECEIVING);
  }

  /**
   * State when waiting for a peer message.
   *
   * @param {!Buffer} chunk
   * @return {!Promise<!State>}
   * @private
   */
  onMessagePending_(chunk) {
    this.buffer_(chunk);

    this.wait_(4)
      .then(buffer => buffer.readUInt32BE(0))
      .then(len => this.wait_(len))
      .then(raw => this.getMessage_(raw))
      .then(message => this.push(message))
      .then(() => this.end_())
      .catch(e => debug(e));

    return this.isComplete_()
      .then(() => State.MESSAGE_PENDING)
      .catch(() => State.MESSAGE_RECEIVING);
  }

  /**
   * State when receiving additional parts of a peer message.
   *
   * @param {!Buffer} chunk
   * @return {!Promise<!State>}
   * @private
   */
  onMessageReceiving_(chunk) {
    this.buffer_(chunk);

    return this.isComplete_()
      .then(() => State.MESSAGE_PENDING)
      .catch(() => State.MESSAGE_RECEIVING);
  }

  /**
   * Runs transitions for a state.
   *
   * @param {!State} state
   * @param {!Buffer} chunk
   * @return {!Promise<!State>}
   * @private
   */
  run_(state, chunk) {
    if (!this.stateMap_.has(state)) {
      throw new Error(`State ${state} is not valid.`);
    }
    return this.stateMap_.get(state)(chunk);
  }

  /**
   * Waits for a specific length of buffer to be available.
   *
   * @param {!Number} size
   * @return {!Promise<!Buffer>}
   * @private
   */
  wait_(size) {
    debug("wait::size", size);
    return new Promise((resolve, reject) => {
      this.queue_.push([size, resolve, reject]);
      this.processQueue_();
    });
  }

  end_() {
    debug("done");
    return new Promise((resolve, reject) => {
      this.queue_.push([0, null, null]);
      this.processQueue_();
    });
  }

  /**
   * Appends a chunk to the buffer.
   *
   * @param {!Buffer} chunk
   * @private
   */
  buffer_(chunk) {
    this.chunks_.push(chunk);
  }

  /**
   *
   *
   * @private
   */
  getBufferSize_() {
    return this.chunks_.reduce((acc, chunk) => (acc += chunk.length), 0);
  }

  /**
   *
   * @param {*} size
   * @private
   */
  consumeBuffer_(size) {
    let total = size;
    let count = 0;
    const chunks = [];

    this.chunks_.some((chunk, index) => {
      // consume full chunk including the next
      if (total > chunk.length) {
        debug("consumeBuffer_::full+next", total);
        chunks.push(chunk);
        total -= chunk.length;
        count += 1;
        return false;
      }

      // consume full chunk excluding the next
      if (total == chunk.length) {
        debug("consumeBuffer_::full", total);
        chunks.push(chunk);
        total -= chunk.length;
        count += 1;
        return true;
      }

      // consume partial chunk
      if (total < chunk.length) {
        debug("consumeBuffer_::partial", total);
        chunks.push(chunk.slice(0, total));
        this.chunks_[index] = chunk.slice(total);
        return true;
      }
    });

    // Remove full chunks that were consumed
    if (count) {
      debug("consumeBuffer_::count", count);
      this.chunks_ = this.chunks_.slice(count);
    }

    return Buffer.concat(chunks);
  }

  /**
   *
   *
   * @private
   */
  processQueue_() {
    debug("processQueue_::queue", this.queue_.length);

    return new Promise((resolve, reject) => {
      if (!this.queue_.length) {
        resolve(false);
        return;
      }

      const [size, queueResolve, queueReject] = this.queue_[0];

      if (!size) {
        this.queue_.shift();
        resolve(true);
        return;
      }

      debug("processQueue_::size", size);
      debug("processQueue_::bufferSize", this.getBufferSize_());
      if (this.getBufferSize_() < size) {
        resolve(false);
        return;
      }

      const chunk = this.consumeBuffer_(size);
      this.queue_.shift();

      debug("processQueue_::chunk", chunk);
      queueResolve(chunk);

      this.processQueue_()
        .then(complete => resolve(complete))
        .catch(e => reject(e));
    });
  }

  /**
   * Checks if the pending buffer has been consumed.
   *
   * @return {!Promise}
   * @private
   */
  isComplete_() {
    return new Promise((resolve, reject) => {
      this.processQueue_().then(complete => {
        debug("isComplete_", complete);
        if (complete) {
          reject();
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Called when new data is piped in.
   *
   * @param {!Buffer} chunk
   * @param {!String} encoding
   * @param {!Function} callback
   * @private
   */
  _transform(chunk, encoding, callback) {
    this.run_(this.state_, chunk)
      .then(nextState => {
        debug(`Transition ${this.state_} -> ${nextState}`);
        this.state_ = nextState;
        callback();
      })
      .catch(e => callback(e));
  }

  /**
   * Builds a new peer message.
   *
   * @param {!Buffer} data
   * @return {!PeerMessage}
   * @private
   */
  getMessage_(data) {
    if (!data.length) {
      return PeerKeepalive.from(data);
    }

    const type = data.readUInt8(0);

    switch (type) {
      case PeerMessageType.BITFIELD:
        return PeerBitfield.from(data);
      case PeerMessageType.CANCEL:
        return PeerCancel.from(data);
      case PeerMessageType.CHOKE:
        return PeerChoke.from(data);
      case PeerMessageType.EXTENDED:
        return PeerExtended.from(data);
      case PeerMessageType.HAVE:
        return PeerHave.from(data);
      case PeerMessageType.INTERESTED:
        return PeerInterested.from(data);
      case PeerMessageType.NOT_INTERESTED:
        return PeerNotInterested.from(data);
      case PeerMessageType.PIECE:
        return PeerPiece.from(data);
      case PeerMessageType.PORT:
        return PeerPort.from(data);
      case PeerMessageType.REQUEST:
        return PeerRequest.from(data);
      case PeerMessageType.UNCHOKE:
        return PeerUnchoke.from(data);
      default:
        debug(`Unknown Message Type: ${type}`);
        debug(data);
    }
  }
}

module.exports = StreamTransform;
