const { expect } = require("./testutils");

const data = require("./testdata");
const PeerPort = require("../lib/peer-port");
const PeerMessageType = require("../lib/peer-message-type");

describe("PeerPort", () => {
  describe("Builder", () => {
    it("should build a message with the correct message type", () => {
      const result = new PeerPort.Builder().build();
      expect(result.getType()).to.equal(PeerMessageType.PORT);
    });

    it("should build a message with a port", () => {
      const result = new PeerPort.Builder().setPort(data.Port.PORT).build();
      expect(result.getPort()).to.equal(data.Port.PORT);
    });
  });

  describe("from", () => {
    it("should parse the message type", () => {
      const result = PeerPort.from(data.Port.BUFFER_TRIMMED);
      expect(result.getType()).to.equal(PeerMessageType.PORT);
    });

    it("should parse the port", () => {
      const result = PeerPort.from(data.Port.BUFFER_TRIMMED);
      expect(result.getPort()).to.equal(data.Port.PORT);
    });
  });

  describe("toBuffer", () => {
    it("should produce a new buffer", () => {
      const result = new PeerPort.Builder().setPort(data.Port.PORT).build();
      expect(result.toBuffer()).to.equalBuffer(data.Port.BUFFER);
    });
  });
});
