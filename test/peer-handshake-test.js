const { expect } = require("./testutils");

const data = require("./testdata");
const PeerHandshake = require("../lib/peer-handshake");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerHandshake", () => {
  describe("Builder", () => {
    it("should build a handshake the correct message type", () => {
      const result = new PeerHandshake.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.HANDSHAKE);
    });

    it("should build a handshake with a protocol", () => {
      const result = new PeerHandshake.Builder()
        .setProtocol(data.Handshake.PROTOCOL)
        .build();
      expect(result.getProtocol()).to.equal(data.Handshake.PROTOCOL);
    });

    it("should build a handshake with reserved bits", () => {
      const result = new PeerHandshake.Builder()
        .setReserved(data.Handshake.RESERVED)
        .build();
      expect(result.getReserved()).to.equalBuffer(data.Handshake.RESERVED);
    });

    it("should build a handshake with an info hash", () => {
      const result = new PeerHandshake.Builder()
        .setInfoHash(data.Handshake.INFO_HASH)
        .build();
      expect(result.getInfoHash()).to.equal(data.Handshake.INFO_HASH);
    });

    it("should build a handshake with a peer id", () => {
      const result = new PeerHandshake.Builder()
        .setPeerId(data.Handshake.PEER_ID)
        .build();
      expect(result.getPeerId()).to.equal(data.Handshake.PEER_ID);
    });
  });

  describe("from", () => {
    it("should parse the protocol", () => {
      const result = PeerHandshake.from(data.Handshake.BUFFER_TRIMMED);
      expect(result.getProtocol()).to.equal(data.Handshake.PROTOCOL);
    });

    it("should parse the reserved bits", () => {
      const result = PeerHandshake.from(data.Handshake.BUFFER_TRIMMED);
      expect(result.getReserved()).to.equalBuffer(data.Handshake.RESERVED);
    });

    it("should parse the info hash", () => {
      const result = PeerHandshake.from(data.Handshake.BUFFER_TRIMMED);
      expect(result.getInfoHash()).to.equal(data.Handshake.INFO_HASH);
    });

    it("should parse the peer id", () => {
      const result = PeerHandshake.from(data.Handshake.BUFFER_TRIMMED);
      expect(result.getPeerId()).to.equal(data.Handshake.PEER_ID);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerHandshake.Builder()
        .setProtocol(data.Handshake.PROTOCOL)
        .setReserved(data.Handshake.RESERVED)
        .setInfoHash(data.Handshake.INFO_HASH)
        .setPeerId(data.Handshake.PEER_ID)
        .build();
      expect(result.toBuffer()).to.equalBuffer(data.Handshake.BUFFER);
    });
  });
});
