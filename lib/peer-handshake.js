const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

module.exports = class PeerHandshake extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.protocol_ = builder.protocol;
    this.reserved_ = builder.reserved;
    this.infoHash_ = builder.infoHash;
    this.peerId_ = builder.peerId;
  }

  static from(buffer) {
    const pstrlen = buffer.length - 49;
    return new PeerHandshake.Builder()
      .setProtocol(buffer.slice(0, pstrlen + 1))
      .setReserved(buffer.slice(pstrlen + 1, pstrlen + 9))
      .setInfoHash(buffer.slice(pstrlen + 9, pstrlen + 29))
      .setPeerId(buffer.slice(pstrlen + 29, pstrlen + 49))
      .build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerHandshake, PeerMessageType.HANDSHAKE);
        this.protocol = Buffer.from("BitTorrent protocol", "utf-8");
        this.reserved = new Buffer([
          0x00,
          0x00,
          0x00,
          0x00,
          0x00,
          0x00,
          0x00,
          0x00
        ]);
        this.infoHash = null;
        this.peerId = null;
      }
      setProtocol(protocol) {
        this.protocol = Buffer.from(protocol, "utf-8");
        return this;
      }
      setReserved(reserved) {
        this.reserved = reserved;
        return this;
      }
      setDHT() {
        // TODO: set reserved bit
        return this;
      }
      setExtended() {
        // TODO: set reserved bit
        return this;
      }
      setInfoHash(infoHash) {
        this.infoHash = Buffer.from(infoHash, "hex");
        return this;
      }
      setPeerId(peerId) {
        this.peerId = Buffer.from(peerId, "utf-8");
        return this;
      }
    }
    return Builder;
  }

  getProtocol() {
    return this.protocol_.toString("utf-8");
  }

  getReserved() {
    return this.reserved_;
  }

  isDHT() {
    return !!(this.reserved_[7] & 1);
  }

  isExtended() {
    return !!(this.reserved_[5] & 0x10);
  }

  getInfoHash() {
    return this.infoHash_.toString("hex");
  }

  getPeerId() {
    return this.peerId_.toString("utf-8");
  }

  /**
   *
   * @override
   */
  toBuffer() {
    return Buffer.concat(
      [
        Buffer.from([this.protocol_.length], "utf-8"),
        this.protocol_,
        this.reserved_,
        this.infoHash_,
        this.peerId_
      ],
      49 + this.protocol_.length
    );
  }

  inspect() {
    return `PeerHandshake<${this.getPeerId()}, ${this.getProtocol()}>`;
  }
};
