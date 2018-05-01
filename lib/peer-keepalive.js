/**
 * Requests that a peer keeps the connection alive.
 *
 * @module PeerKeepAlive
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Requests that a peer keeps the connection alive.
 *
 * @extends {PeerMessage}
 */
class PeerKeepAlive extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerKeepAliveBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerKeepAlive}
   */
  static from(buffer) {
    return new PeerKeepAlive.Builder().build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerKeepAlive message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerKeepAliveBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerKeepAlive, PeerMessageType.KEEP_ALIVE);
      }
    }
    return PeerKeepAliveBuilder;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    return new Buffer(4);
  }

  inspect() {
    return "PeerKeepAlive";
  }
}

module.exports = PeerKeepAlive;
