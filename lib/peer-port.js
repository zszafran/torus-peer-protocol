/**
 * Informs a peer of a listening DHT port.
 *
 * @module PeerPort
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

/**
 * Informs a peer of a listening DHT port.
 *
 * @extends {PeerMessage}
 */
class PeerPort extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerPortBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.port_ = builder.port;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerPort}
   */
  static from(buffer) {
    return new PeerPort.Builder().setPort(buffer.readUInt16BE(1)).build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerPort message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerPortBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
      constructor() {
        super(PeerPort, PeerMessageType.PORT);
        this.index = null;
      }

      /**
       * Sets the port value.
       *
       * @param {!Number} port
       * @return {!PeerPortBuilder}
       */
      setPort(port) {
        this.port = port;
        return this;
      }
    }
    return PeerPortBuilder;
  }

  /**
   * Gets the port value.
   *
   * @return {!Number}
   */
  getPort() {
    return this.port_;
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
   * @override
   */
  toBuffer() {
    const buffer = super.toBuffer(2);
    buffer.writeUInt16BE(this.port_, 5);
    return buffer;
  }

  inspect() {
    return `PeerPort<${this.getPort()}>`;
  }
}

module.exports = PeerPort;
