const { expect } = require("./testutils");

const data = require("./testdata");
const PeerPiece = require("../lib/peer-piece");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerPiece", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerPiece.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.PIECE);
    });

    it("should build a message with an index", () => {
      const result = new PeerPiece.Builder().setIndex(data.Piece.INDEX).build();
      expect(result.getIndex()).to.equal(data.Piece.INDEX);
    });

    it("should build a message with a begin index", () => {
      const result = new PeerPiece.Builder().setBegin(data.Piece.BEGIN).build();
      expect(result.getBegin()).to.equal(data.Piece.BEGIN);
    });

    it("should build a message with a block", () => {
      const result = new PeerPiece.Builder().setBlock(data.Piece.BLOCK).build();
      expect(result.getBlock()).to.equalBuffer(data.Piece.BLOCK);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerPiece.from(data.Piece.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.PIECE);
    });

    it("should parse the index", () => {
      const result = PeerPiece.from(data.Piece.BUFFER_TRIMMED);
      expect(result.getIndex()).to.equal(data.Piece.INDEX);
    });

    it("should parse the begin", () => {
      const result = PeerPiece.from(data.Piece.BUFFER_TRIMMED);
      expect(result.getBegin()).to.equal(data.Piece.BEGIN);
    });

    it("should parse the block", () => {
      const result = PeerPiece.from(data.Piece.BUFFER_TRIMMED);
      expect(result.getBlock()).to.equalBuffer(data.Piece.BLOCK);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerPiece.Builder()
        .setIndex(data.Piece.INDEX)
        .setBegin(data.Piece.BEGIN)
        .setBlock(data.Piece.BLOCK)
        .build();
      expect(result.toBuffer()).to.equalBuffer(data.Piece.BUFFER);
    });
  });
});
