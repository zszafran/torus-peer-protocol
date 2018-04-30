const { expect } = require("./testutils");

const data = require("./testdata");
const PeerRequest = require("../lib/peer-request");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerRequest", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerRequest.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.REQUEST);
    });

    it("should build a message with an index", () => {
      const result = new PeerRequest.Builder()
        .setIndex(data.Request.INDEX)
        .build();
      expect(result.getIndex()).to.equal(data.Request.INDEX);
    });

    it("should build a message with a begin index", () => {
      const result = new PeerRequest.Builder()
        .setBegin(data.Request.BEGIN)
        .build();
      expect(result.getBegin()).to.equal(data.Request.BEGIN);
    });

    it("should build a message with a length", () => {
      const result = new PeerRequest.Builder()
        .setLength(data.Request.LENGTH)
        .build();
      expect(result.getLength()).to.equal(data.Request.LENGTH);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerRequest.from(data.Request.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.REQUEST);
    });

    it("should parse the index", () => {
      const result = PeerRequest.from(data.Request.BUFFER_TRIMMED);
      expect(result.getIndex()).to.equal(data.Request.INDEX);
    });

    it("should parse the begin", () => {
      const result = PeerRequest.from(data.Request.BUFFER_TRIMMED);
      expect(result.getBegin()).to.equal(data.Request.BEGIN);
    });

    it("should parse the length", () => {
      const result = PeerRequest.from(data.Request.BUFFER_TRIMMED);
      expect(result.getLength()).to.equal(data.Request.LENGTH);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerRequest.Builder()
        .setIndex(data.Request.INDEX)
        .setBegin(data.Request.BEGIN)
        .setLength(data.Request.LENGTH)
        .build();
      expect(result.toBuffer()).to.equalBuffer(data.Request.BUFFER);
    });
  });
});
