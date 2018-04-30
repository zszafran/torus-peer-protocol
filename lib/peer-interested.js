const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerInterested extends PeerMessage {
  static from(buffer) {
    return new PeerInterested.Builder().build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerInterested, PeerMessageType.INTERESTED);
      }
    }
    return Builder;
  }

  inspect() {
    return "PeerInterested";
  }
};
