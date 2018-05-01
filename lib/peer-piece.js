const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerPiece extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.index_ = builder.index;
    this.begin_ = builder.begin;
    this.block_ = builder.block;
  }

  static from(buffer) {
    return new PeerPiece.Builder()
      .setIndex(buffer.readUInt32BE(1))
      .setBegin(buffer.readUInt32BE(5))
      .setBlock(buffer.slice(9))
      .build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerPiece, PeerMessageType.PIECE);
        this.index = null;
        this.begin = null;
        this.block = null;
      }
      setIndex(index) {
        this.index = index;
        return this;
      }
      setBegin(begin) {
        this.begin = begin;
        return this;
      }
      setBlock(block) {
        this.block = block;
        return this;
      }
    }
    return Builder;
  }

  getIndex() {
    return this.index_;
  }

  getBegin() {
    return this.begin_;
  }

  getBlock() {
    return this.block_;
  }

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
};
