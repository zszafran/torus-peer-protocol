module.exports = class PeerMessage {
  constructor(builder) {
    this.type_ = builder.type;
  }

  getType() {
    return this.type_;
  }

  toBuffer(size = 0) {
    const buffer = new Buffer(5 + size);
    buffer.writeUInt32BE(size + 1, 0); // size + len of 'type' field
    buffer.writeUInt8(this.getType(), 4);
    return buffer;
  }
};
