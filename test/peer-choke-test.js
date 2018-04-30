const { expect } = require("./testutils");

const data = require("./testdata");
const PeerChoke = require("../lib/peer-choke");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerChoke", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerChoke.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.CHOKE);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerChoke.from(data.Choke.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.CHOKE);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerChoke.Builder().build();
      expect(result.toBuffer()).to.equalBuffer(data.Choke.BUFFER);
    });
  });
});
