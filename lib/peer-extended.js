const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerExtended extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.extendedType_ = builder.extendedType;
    this.extendedPayload_ = builder.extendedPayload;
  }

  static from(buffer) {
    return new PeerExtended.Builder()
      .setExtendedType(buffer.readUInt8(1))
      .setExtendedPayload(buffer.slice(2))
      .build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerExtended, PeerMessageType.EXTENDED);
        this.extendedPayload = null;
        this.extendedType = null;
      }
      setExtendedPayload(payload) {
        this.extendedPayload = payload;
        return this;
      }
      setExtendedType(type) {
        this.extendedType = type;
        return this;
      }
    }
    return Builder;
  }

  getExtendedType() {
    return this.extendedType_;
  }

  getExtendedPayload() {
    return this.extendedPayload_;
  }

  toBuffer() {
    const buffer = super.toBuffer(1 + this.extendedPayload_.length);
    buffer.writeUInt8(this.extendedType_, 5);
    this.extendedPayload_.copy(buffer, 6);
    return buffer;
  }

  inspect() {
    return `PeerExtended<${this.getExtendedType()}>`;
  }
};
