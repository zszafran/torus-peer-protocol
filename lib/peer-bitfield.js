const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

const BitField = require("bitfield");

module.exports = class PeerBitfield extends PeerMessage {
  constructor(builder) {
    super(builder);
    this.bitfield_ = builder.bitfield;
  }

  static from(buffer) {
    return new PeerBitfield.Builder().setBitField(buffer.slice(1)).build();
  }

  static get Builder() {
    class Builder extends PeerMessageBuilder {
      constructor() {
        super(PeerBitfield, PeerMessageType.BITFIELD);
        this.bitfield = null;
      }
      setBitField(buffer) {
        this.bitfield = new BitField(buffer || []);
        return this;
      }
    }
    return Builder;
  }

  getBitField() {
    return this.bitfield_;
  }

  getBitFieldBuffer() {
    return this.bitfield_.buffer;
  }

  toBuffer() {
    const buffer = super.toBuffer(this.bitfield_.buffer.length);
    this.bitfield_.buffer.copy(buffer, 5);
    return buffer;
  }

  inspect() {
    return "PeerBitfield";
  }
};
