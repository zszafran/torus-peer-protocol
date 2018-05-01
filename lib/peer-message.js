/**
 * Base class for a peer message.
 */
class PeerMessage {
  /**
   * Constructs a new instance of a peer message.
   *
   * @param {PeerMessageBuilder} builder
   */
  constructor(builder) {
    this.type_ = builder.type;
  }

  /**
   * Gets the type of the message.
   *
   * @return {!MessageType}
   */
  getType() {
    return this.type_;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   */
  toBuffer(size = 0) {
    const buffer = new Buffer(5 + size);
    buffer.writeUInt32BE(size + 1, 0); // size + len of 'type' field
    buffer.writeUInt8(this.getType(), 4);
    return buffer;
  }
}

module.exports = PeerMessage;
