/**
 * Represents the pieces that a peer has been successfully downloaded.
 *
 * @module PeerBitField
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

const BitField = require("bitfield");

/**
 * Represents the pieces that a peer has been successfully downloaded.
 *
 * @extends {PeerMessage}
 */
class PeerBitfield extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerBitfieldBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.bitfield_ = builder.bitfield;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerBitfield}
   */
  static from(buffer) {
    return new PeerBitfield.Builder().setBitField(buffer.slice(1)).build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerBitfield message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerBitfieldBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerBitfield, PeerMessageType.BITFIELD);
        this.bitfield = null;
      }

      /**
       * Sets the bitfield values.
       *
       * @param {!Buffer} buffer
       * @return {!PeerBitfieldBuilder}
       */
      setBitField(buffer) {
        this.bitfield = new BitField(buffer || []);
        return this;
      }
    }
    return PeerBitfieldBuilder;
  }

  /**
   * Gets the bitfield values.
   *
   * @return {!BitField}
   */
  getBitField() {
    return this.bitfield_;
  }

  /**
   * Gets the bitfield values as a buffer.
   *
   * @return {!Buffer}
   */
  getBitFieldBuffer() {
    return this.bitfield_.buffer;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    const buffer = super.toBuffer(this.bitfield_.buffer.length);
    this.bitfield_.buffer.copy(buffer, 5);
    return buffer;
  }

  inspect() {
    return "PeerBitfield";
  }
}

module.exports = PeerBitfield;
