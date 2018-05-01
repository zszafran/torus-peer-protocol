const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerPort extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.port_ = builder.port;
  }

  static from(buffer) {
    return new PeerPort.Builder().setPort(buffer.readUInt16BE(1)).build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerPort, PeerMessageType.PORT);
        this.index = null;
      }
      setPort(port) {
        this.port = port;
        return this;
      }
    }
    return Builder;
  }

  getPort() {
    return this.port_;
  }

  toBuffer() {
    const buffer = super.toBuffer(2);
    buffer.writeUInt16BE(this.port_, 5);
    return buffer;
  }

  inspect() {
    return `PeerPort<${this.getPort()}>`;
  }
};
