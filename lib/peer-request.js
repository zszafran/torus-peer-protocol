/**
 * Requests a piece from a peer.
 *
 * @module PeerRequest
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Requests a piece from a peer.
 *
 * @extends {PeerRequest}
 */
class PeerRequest extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerRequestBuilder} builder
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
   * @return {!PeerRequest}
   */
  static from(buffer) {
    return new PeerRequest.Builder()
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
     * Builder class for creating a new PeerRequest message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerRequestBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerRequest, PeerMessageType.REQUEST);
        this.index = null;
        this.begin = null;
        this.length = null;
      }

      /**
       * Sets the index value.
       *
       * @param {!Number} index
       * @return {!PeerRequestBuilder}
       */
      setIndex(index) {
        this.index = index;
        return this;
      }

      /**
       * Sets the begin value.
       *
       * @param {!Number} begin
       * @return {!PeerRequestBuilder}
       */
      setBegin(begin) {
        this.begin = begin;
        return this;
      }

      /**
       * Sets the length value.
       *
       * @param {!Number} length
       * @return {!PeerRequestBuilder}
       */
      setLength(length) {
        this.length = length;
        return this;
      }
    }
    return PeerRequestBuilder;
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
    return `PeerRequest<${this.getIndex()}, ${this.getBegin()}, ${this.getLength()}>`;
  }
}

module.exports = PeerRequest;
