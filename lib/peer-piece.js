/**
 * Contains a blcok of piece requested from a peer.
 *
 * @module PeerPiece
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Contains a blcok of piece requested from a peer.
 *
 * @extends {PeerMessage}
 */
class PeerPiece extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerPieceBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.index_ = builder.index;
    this.begin_ = builder.begin;
    this.block_ = builder.block;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerPiece}
   */
  static from(buffer) {
    return new PeerPiece.Builder()
      .setIndex(buffer.readUInt32BE(1))
      .setBegin(buffer.readUInt32BE(5))
      .setBlock(buffer.slice(9))
      .build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerPiece message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerPieceBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerPiece, PeerMessageType.PIECE);
        this.index = null;
        this.begin = null;
        this.block = null;
      }

      /**
       * Sets the index value.
       *
       * @param {!Number} index
       * @return {!PeerPieceBuilder}
       */
      setIndex(index) {
        this.index = index;
        return this;
      }

      /**
       * Sets the begin value.
       *
       * @param {!Number} begin
       * @return {!PeerPieceBuilder}
       */
      setBegin(begin) {
        this.begin = begin;
        return this;
      }

      /**
       * Sets the block value.
       *
       * @param {!Buffer} block
       * @return {!PeerPieceBuilder}
       */
      setBlock(block) {
        this.block = block;
        return this;
      }
    }
    return PeerPieceBuilder;
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
   * Gets the block value.
   *
   * @return {!Buffer}
   */
  getBlock() {
    return this.block_;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    const buffer = super.toBuffer(this.block_.length + 8);
    buffer.writeUInt32BE(this.index_, 5);
    buffer.writeUInt32BE(this.begin_, 9);
    this.block_.copy(buffer, 13);
    return buffer;
  }

  inspect() {
    return `PeerPiece<${this.getIndex()}, ${this.getBegin()}>`;
  }
}

module.exports = PeerPiece;
