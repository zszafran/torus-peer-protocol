/**
 * Cancels a specific block request.
 *
 * @module PeerCancel
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Cancels a specific block request.
 *
 * @extends {PeerMessage}
 */
class PeerCancel extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerCancelBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.index_ = builder.index;
    this.begin_ = builder.begin;
    this.length_ = builder.length;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerCancel}
   */
  static from(buffer) {
    return new PeerCancel.Builder()
      .setIndex(buffer.readUInt32BE(1))
      .setBegin(buffer.readUInt32BE(5))
      .setLength(buffer.readUInt32BE(9))
      .build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerCancel message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerCancelBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerCancel, PeerMessageType.CANCEL);
        this.index = null;
        this.begin = null;
        this.length = null;
      }

      /**
       * Sets the index value.
       *
       * @param {!Number} index
       * @return {!PeerCancelBuilder}
       */
      setIndex(index) {
        this.index = index;
        return this;
      }

      /**
       * Sets the begin value.
       *
       * @param {!Number} begin
       * @return {!PeerCancelBuilder}
       */
      setBegin(begin) {
        this.begin = begin;
        return this;
      }

      /**
       * Sets the length value.
       *
       * @param {!Number} length
       * @return {!PeerCancelBuilder}
       */
      setLength(length) {
        this.length = length;
        return this;
      }
    }
    return PeerCancelBuilder;
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
   * Gets the begin value.
   *
   * @return {!Number}
   */
  getBegin() {
    return this.begin_;
  }

  /**
   * Gets the length value.
   *
   * @return {!Number}
   */
  getLength() {
    return this.length_;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    const buffer = super.toBuffer(12);
    buffer.writeUInt32BE(this.index_, 5);
    buffer.writeUInt32BE(this.begin_, 9);
    buffer.writeUInt32BE(this.length_, 13);
    return buffer;
  }

  inspect() {
    return `PeerCancel<${this.getIndex()}, ${this.getBegin()}, ${this.getLength()}>`;
  }
}

module.exports = PeerCancel;
