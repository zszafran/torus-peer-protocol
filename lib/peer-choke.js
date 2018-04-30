const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerChoke extends PeerMessage {
  static from(buffer) {
    return new PeerChoke.Builder().build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerChoke, PeerMessageType.CHOKE);
      }
    }
    return Builder;
  }

  inspect() {
    return "PeerChoke";
  }
};
