const { expect } = require("./testutils");

const data = require("./testdata");
const PeerExtended = require("../lib/peer-extended");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerExtended", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerExtended.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.EXTENDED);
    });

    it("should build a message with an extended type", () => {
      const result = new PeerExtended.Builder()
        .setExtendedType(data.Extended.EXTENDED_TYPE)
        .build();
      expect(result.getExtendedType()).to.equal(data.Extended.EXTENDED_TYPE);
    });

    it("should build a message with a extended payload index", () => {
      const result = new PeerExtended.Builder()
        .setExtendedPayload(data.Extended.EXTENDED_PAYLOAD)
        .build();
      expect(result.getExtendedPayload()).to.equalBuffer(
        data.Extended.EXTENDED_PAYLOAD
      );
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerExtended.from(data.Extended.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.EXTENDED);
    });

    it("should parse the extended type", () => {
      const result = PeerExtended.from(data.Extended.BUFFER_TRIMMED);
      expect(result.getExtendedType()).to.equal(data.Extended.EXTENDED_TYPE);
    });

    it("should parse the extended payload", () => {
      const result = PeerExtended.from(data.Extended.BUFFER_TRIMMED);
      expect(result.getExtendedPayload()).to.equalBuffer(
        data.Extended.EXTENDED_PAYLOAD
      );
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerExtended.Builder()
        .setExtendedType(data.Extended.EXTENDED_TYPE)
        .setExtendedPayload(data.Extended.EXTENDED_PAYLOAD)
        .build();
      expect(result.toBuffer()).to.equalBuffer(data.Extended.BUFFER);
    });
  });
});
