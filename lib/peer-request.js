const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerRequest extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.index_ = builder.index;
    this.begin_ = builder.begin;
    this.length_ = builder.length;
  }

  static from(buffer) {
    return new PeerRequest.Builder()
      .setIndex(buffer.readUInt32BE(1))
      .setBegin(buffer.readUInt32BE(5))
      .setLength(buffer.readUInt32BE(9))
      .build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerRequest, PeerMessageType.REQUEST);
        this.index = null;
        this.begin = null;
        this.length = null;
      }
      setIndex(index) {
        this.index = index;
        return this;
      }
      setBegin(begin) {
        this.begin = begin;
        return this;
      }
      setLength(length) {
        this.length = length;
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

  getLength() {
    return this.length_;
  }

  toBuffer() {
    const buffer = super.toBuffer(12);
    buffer.writeUInt32BE(this.index_, 5);
    buffer.writeUInt32BE(this.begin_, 9);
    buffer.writeUInt32BE(this.length_, 13);
    return buffer;
  }

  inspect() {
    return `PeerRequest (${this.getIndex()}, ${this.getBegin()}, ${this.getLength()})`;
  }
};
