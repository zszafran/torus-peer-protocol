const { expect } = require("./testutils");

const data = require("./testdata");
const PeerHave = require("../lib/peer-have");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerHave", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerHave.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.HAVE);
    });

    it("should build a message with an index", () => {
      const result = new PeerHave.Builder().setIndex(data.Have.INDEX).build();
      expect(result.getIndex()).to.equal(data.Have.INDEX);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerHave.from(data.Have.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.HAVE);
    });

    it("should parse the index", () => {
      const result = PeerHave.from(data.Have.BUFFER_TRIMMED);
      expect(result.getIndex()).to.equal(data.Have.INDEX);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerHave.Builder().setIndex(data.Have.INDEX).build();
      expect(result.toBuffer()).to.equalBuffer(data.Have.BUFFER);
    });
  });
});
