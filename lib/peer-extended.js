/**
 * Wraps an extended peer message.
 *
 * @module PeerExtended
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Wraps an extended peer message.
 *
 * @extends {PeerMessage}
 */
class PeerExtended extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerExtendedBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.extendedType_ = builder.extendedType;
    this.extendedPayload_ = builder.extendedPayload;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerExtended}
   */
  static from(buffer) {
    return new PeerExtended.Builder()
      .setExtendedType(buffer.readUInt8(1))
      .setExtendedPayload(buffer.slice(2))
      .build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerExtended message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerExtendedBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerExtended, PeerMessageType.EXTENDED);
        this.extendedPayload = null;
        this.extendedType = null;
      }

      /**
       * Sets the extended payload.
       *
       * @param {!Buffer} payload
       * @return {!PeerExtendedBuilder}
       */
      setExtendedPayload(payload) {
        this.extendedPayload = payload;
        return this;
      }

      /**
       * Sets the extended type.
       *
       * @param {!Number} type
       * @return {!PeerExtendedBuilder}
       */
      setExtendedType(type) {
        this.extendedType = type;
        return this;
      }
    }
    return PeerExtendedBuilder;
  }

  /**
   * Gets the extended type.
   *
   * @return {!Number}
   */
  getExtendedType() {
    return this.extendedType_;
  }

  /**
   * Gets the extended payload.
   *
   * @return {!Buffer}
   */
  getExtendedPayload() {
    return this.extendedPayload_;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    const buffer = super.toBuffer(1 + this.extendedPayload_.length);
    buffer.writeUInt8(this.extendedType_, 5);
    this.extendedPayload_.copy(buffer, 6);
    return buffer;
  }

  inspect() {
    return `PeerExtended<${this.getExtendedType()}>`;
  }
}

module.exports = PeerExtended;
