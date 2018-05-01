/**
 * Requests that a peer allows pieces to be requested.
 *
 * @module PeerInterested
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Requests that a peer allows pieces to be requested.
 *
 * @extends {PeerMessage}
 */
module.exports = class PeerInterested extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerInterestedBuilder} builder
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
   * @return {!PeerInterested}
   */
  static from(buffer) {
    return new PeerInterested.Builder().build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerInterested message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerInterestedBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerInterested, PeerMessageType.INTERESTED);
      }
    }
    return PeerInterestedBuilder;
  }

  inspect() {
    return "PeerInterested";
  }
};
