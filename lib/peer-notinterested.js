const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerNotInterested extends PeerMessage {
  static from(buffer) {
    return new PeerNotInterested.Builder().build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerNotInterested, PeerMessageType.NOT_INTERESTED);
      }
    }
    return Builder;
  }

  inspect() {
    return "PeerNotInterested";
  }
};
