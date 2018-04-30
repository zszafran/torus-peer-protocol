const { expect } = require("./testutils");

const data = require("./testdata");
const PeerNotInterested = require("../lib/peer-notinterested");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerNotInterested", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerNotInterested.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.NOT_INTERESTED);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerNotInterested.from(data.NotInterested.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.NOT_INTERESTED);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerNotInterested.Builder().build();
      expect(result.toBuffer()).to.equalBuffer(data.NotInterested.BUFFER);
    });
  });
});
