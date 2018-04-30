const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerKeepalive extends PeerMessage {
  static from(buffer) {
    return new PeerKeepalive.Builder().build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerKeepalive, PeerMessageType.KEEP_ALIVE);
      }
    }
    return Builder;
  }

  toBuffer() {
    return new Buffer(4);
  }

  inspect() {
    return "PeerKeepalive";
  }
};
