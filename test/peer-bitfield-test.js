const { expect } = require("./testutils");

const data = require("./testdata");
const PeerBitfield = require("../lib/peer-bitfield");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerBitfield", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerBitfield.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.BITFIELD);
    });

    it("should build a message with a bitfield", () => {
      const result = new PeerBitfield.Builder()
        .setBitField(data.Bitfield.BITFIELD)
        .build();
      expect(result.getBitFieldBuffer()).to.equalBuffer(data.Bitfield.BITFIELD);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerBitfield.from(data.Bitfield.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.BITFIELD);
    });

    it("should parse the bitfield", () => {
      const result = PeerBitfield.from(data.Bitfield.BUFFER_TRIMMED);
      expect(result.getBitFieldBuffer()).to.equalBuffer(data.Bitfield.BITFIELD);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerBitfield.Builder()
        .setBitField(data.Bitfield.BITFIELD)
        .build();
      expect(result.toBuffer()).to.equalBuffer(data.Bitfield.BUFFER);
    });
  });
});
