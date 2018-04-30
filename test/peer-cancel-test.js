const { expect } = require("./testutils");

const data = require("./testdata");
const PeerCancel = require("../lib/peer-cancel");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerCancel", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerCancel.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.CANCEL);
    });

    it("should build a message with an index", () => {
      const result = new PeerCancel.Builder()
        .setIndex(data.Cancel.INDEX)
        .build();
      expect(result.getIndex()).to.equal(data.Cancel.INDEX);
    });

    it("should build a message with a begin index", () => {
      const result = new PeerCancel.Builder()
        .setBegin(data.Cancel.BEGIN)
        .build();
      expect(result.getBegin()).to.equal(data.Cancel.BEGIN);
    });

    it("should build a message with a length", () => {
      const result = new PeerCancel.Builder()
        .setLength(data.Cancel.LENGTH)
        .build();
      expect(result.getLength()).to.equal(data.Cancel.LENGTH);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerCancel.from(data.Cancel.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.CANCEL);
    });

    it("should parse the index", () => {
      const result = PeerCancel.from(data.Cancel.BUFFER_TRIMMED);
      expect(result.getIndex()).to.equal(data.Cancel.INDEX);
    });

    it("should parse the begin", () => {
      const result = PeerCancel.from(data.Cancel.BUFFER_TRIMMED);
      expect(result.getBegin()).to.equal(data.Cancel.BEGIN);
    });

    it("should parse the length", () => {
      const result = PeerCancel.from(data.Cancel.BUFFER_TRIMMED);
      expect(result.getLength()).to.equal(data.Cancel.LENGTH);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerCancel.Builder()
        .setIndex(data.Cancel.INDEX)
        .setBegin(data.Cancel.BEGIN)
        .setLength(data.Cancel.LENGTH)
        .build();
      expect(result.toBuffer()).to.equalBuffer(data.Cancel.BUFFER);
    });
  });
});
