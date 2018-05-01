const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerHave extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.index_ = builder.index;
  }

  static from(buffer) {
    return new PeerHave.Builder().setIndex(buffer.readUInt32BE(1)).build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerHave, PeerMessageType.HAVE);
        this.index = null;
      }
      setIndex(index) {
        this.index = index;
        return this;
      }
    }
    return Builder;
  }

  getIndex() {
    return this.index_;
  }

  toBuffer() {
    const buffer = super.toBuffer(4);
    buffer.writeUInt32BE(this.index_, 5);
    return buffer;
  }

  inspect() {
    return `PeerHave<${this.getIndex()}>`;
  }
};
