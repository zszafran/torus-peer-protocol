/**
 * Requests that a peer stops requesting pieces.
 *
 * @module PeerChoke
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Requests that a peer stops requesting pieces.
 *
 * @extends {PeerMessage}
 */
class PeerChoke extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerChokeBuilder} builder
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
   * @return {!PeerChoke}
   */
  static from(buffer) {
    return new PeerChoke.Builder().build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerChoke message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerChokeBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerChoke, PeerMessageType.CHOKE);
      }
    }
    return PeerChokeBuilder;
  }

  inspect() {
    return "PeerChoke";
  }
}

module.exports = PeerChoke;
