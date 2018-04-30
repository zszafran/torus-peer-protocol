const { expect } = require("./testutils");

const data = require("./testdata");
const PeerInterested = require("../lib/peer-interested");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerInterested", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerInterested.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.INTERESTED);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerInterested.from(data.Interested.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.INTERESTED);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerInterested.Builder().build();
      expect(result.toBuffer()).to.equalBuffer(data.Interested.BUFFER);
    });
  });
});
