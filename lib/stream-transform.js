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

    this.init_ = false;
    this.chunks_ = [];
    this.queue_ = [];
  }

  /**
   * @private
   */
  waitForHandshake_() {
    this.wait_(1, buffer => {
      this.wait_(buffer.readUInt8(0) + 48, buffer => {
        this.push(PeerHandshake.from(buffer));
        process.nextTick(() => this.waitForMessage_());
      });
    });
  }

  /**
   * @private
   */
  waitForMessage_() {
    this.wait_(4, buffer => {
      this.wait_(buffer.readUInt32BE(0), buffer => {
        this.push(this.getMessage_(buffer));
        process.nextTick(() => this.waitForMessage_());
      });
    });
  }

  /**
   * Waits for a specific length of buffer to be available.
   *
   * @param {!Number} size
   * @return {!Promise<!Buffer>}
   * @private
   */
  wait_(size, callback) {
    this.queue_.push([size, callback]);
    this.processQueue_();
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
        chunks.push(chunk);
        total -= chunk.length;
        count += 1;
        return false;
      }

      // consume full chunk excluding the next
      if (total == chunk.length) {
        chunks.push(chunk);
        total -= chunk.length;
        count += 1;
        return true;
      }

      // consume partial chunk
      if (total < chunk.length) {
        chunks.push(chunk.slice(0, total));
        this.chunks_[index] = chunk.slice(total);
        return true;
      }
    });

    // Remove full chunks that were consumed
    if (count) {
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
    if (!this.queue_.length) return;
    const [size, callback] = this.queue_[0];

    if (this.getBufferSize_() < size) return;

    const chunk = this.consumeBuffer_(size);
    this.queue_.shift();
    callback(chunk);
    this.processQueue_();
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
    if (!this.init_) {
      this.waitForHandshake_();
      this.init_ = true;
    }

    this.buffer_(chunk);
    this.processQueue_();
    callback();
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

    switch (data.readUInt8(0)) {
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
