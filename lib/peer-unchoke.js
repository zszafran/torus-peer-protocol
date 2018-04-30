const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerUnchoke extends PeerMessage {
  static from(buffer) {
    return new PeerUnchoke.Builder().build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerUnchoke, PeerMessageType.UNCHOKE);
      }
    }
    return Builder;
  }

  inspect() {
    return "PeerUnchoke";
  }
};
