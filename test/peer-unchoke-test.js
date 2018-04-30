const { expect } = require("./testutils");

const data = require("./testdata");
const PeerUnchoke = require("../lib/peer-unchoke");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerUnchoke", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerUnchoke.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.UNCHOKE);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerUnchoke.from(data.Unchoke.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.UNCHOKE);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerUnchoke.Builder().build();
      expect(result.toBuffer()).to.equalBuffer(data.Unchoke.BUFFER);
    });
  });
});
