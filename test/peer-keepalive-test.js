const { expect } = require("./testutils");

const data = require("./testdata");
const PeerKeepalive = require("../lib/peer-keepalive");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerKeepalive", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerKeepalive.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.KEEP_ALIVE);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerKeepalive.from(data.Keepalive.BUFFER);
      expect(result.getType()).to.equal(PeerMessageType.KEEP_ALIVE);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerKeepalive.Builder().build();
      expect(result.toBuffer()).to.equalBuffer(data.Keepalive.BUFFER);
    });
  });
});
