/**
 * Informs a peer that it can request pieces.
 *
 * @module PeerUnchoke
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Informs a peer that it can request pieces.
 *
 * @extends {PeerRequest}
 */
class PeerUnchoke extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerUnchokeBuilder} builder
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
   * @return {!PeerUnchoke}
   */
  static from(buffer) {
    return new PeerUnchoke.Builder().build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerUnchoke message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerUnchokeBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerUnchoke, PeerMessageType.UNCHOKE);
      }
    }
    return PeerUnchokeBuilder;
  }

  inspect() {
    return "PeerUnchoke";
  }
}

module.exports = PeerUnchoke;
