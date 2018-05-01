/**
 * Represents a piece that a peer has been successfully downloaded.
 *
 * @module PeerHave
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Represents a piece that a peer has been successfully downloaded.
 *
 * @extends {PeerMessage}
 */
class PeerHave extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerHaveBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.index_ = builder.index;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerHave}
   */
  static from(buffer) {
    return new PeerHave.Builder().setIndex(buffer.readUInt32BE(1)).build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerHave message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerHaveBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerHave, PeerMessageType.HAVE);
        this.index = null;
      }

      /**
       * Sets the index value.
       *
       * @param {!Number} index
       * @return {!PeerHaveBuilder}
       */
      setIndex(index) {
        this.index = index;
        return this;
      }
    }
    return PeerHaveBuilder;
  }

  /**
   * Gets the index value.
   *
   * @return {!Number}
   */
  getIndex() {
    return this.index_;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    const buffer = super.toBuffer(4);
    buffer.writeUInt32BE(this.index_, 5);
    return buffer;
  }

  inspect() {
    return `PeerHave<${this.getIndex()}>`;
  }
}

module.exports = PeerHave;
