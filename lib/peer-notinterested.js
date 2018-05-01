/**
 * Informs a peer that pieces will no longer be requested.
 *
 * @module PeerNotInterested
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Informs a peer that pieces will no longer be requested.
 *
 * @extends {PeerMessage}
 */
class PeerNotInterested extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerNotInterestedBuilder} builder
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
   * @return {!PeerNotInterested}
   */
  static from(buffer) {
    return new PeerNotInterested.Builder().build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerNotInterested message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerNotInterestedBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerNotInterested, PeerMessageType.NOT_INTERESTED);
      }
    }
    return PeerNotInterestedBuilder;
  }

  inspect() {
    return "PeerNotInterested";
  }
}

module.exports = PeerNotInterested;
