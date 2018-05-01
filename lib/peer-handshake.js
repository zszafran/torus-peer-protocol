/**
 * Represents specifics about the client and protocol that the peer is using.
 *
 * @module PeerHandshake
 */

const PeerMessage = require("./peer-message");
const PeerMessageBuilder = require("./peer-message-builder");
const PeerMessageType = require("./peer-message-type");

const Reserved = {
  AZUREUS_MESSAGING_PROTOCOL: [0, 0x80],
  BITCOMET_EXTENSION_1_PROTOCOL: [0, 0xff],
  BITCOMET_EXTENSION_2_PROTOCOL: [1, 0xff],
  BITTORRENT_LOCATION_AWARE_PROTOCOL: [2, 0x08],
  LIBTORRENT_EXTENSION_PROTOCOL: [5, 0x10],
  EXTENSION_NEGOTION_1_PROTOCOL: [5, 0x01],
  EXTENSION_NEGOTION_2_PROTOCOL: [5, 0x02],
  BITTORRENT_DHT: [7, 0x01],
  FAST_EXTENSIONS: [7, 0x04],
  NAT_TRAVERSAL: [7, 0x08],
  HYBRID_LEGACY_V2_UPGRADE: [7, 0x10]
};

/**
 * Represents specifics about the client and protocol that the peer is using.
 *
 * @extends {PeerMessage}
 */
class PeerHandshake extends PeerMessage {
  /**
   * Constructs a new instance from a builder.
   *
   * @param {!PeerHandshakeBuilder} builder
   * @override
   */
  constructor(builder) {
    super(builder);
    this.protocol_ = builder.protocol;
    this.reserved_ = builder.reserved;
    this.infoHash_ = builder.infoHash;
    this.peerId_ = builder.peerId;
    Object.freeze(this);
  }

  /**
   * Constructs a new instance from a buffer.
   *
   * @param {!Buffer} buffer
   * @return {!PeerHandshake}
   */
  static from(buffer) {
    const pstrlen = buffer.length - 49;
    return new PeerHandshake.Builder()
      .setProtocol(buffer.slice(0, pstrlen + 1))
      .setReserved(buffer.slice(pstrlen + 1, pstrlen + 9))
      .setInfoHash(buffer.slice(pstrlen + 9, pstrlen + 29))
      .setPeerId(buffer.slice(pstrlen + 29, pstrlen + 49))
      .build();
  }

  /**
   * Gets a reference to the builder class.
   */
  static get Builder() {
    /**
     * Builder class for creating a new PeerHandshake message.
     *
     * @extends {PeerMessageBuilder}
     */
    class PeerHandshakeBuilder extends PeerMessageBuilder {
      /**
       * Constructs a new instance of the builder.
       *
       * @override
       */
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

      /**
       * Sets the protocol.
       *
       * @param {!String} protocol
       * @return {!PeerHandshakeBuilder}
       */
      setProtocol(protocol) {
        this.protocol = Buffer.from(protocol, "utf-8");
        return this;
      }

      /**
       * Sets the reserved bits.
       *
       * @param {!Buffer} reserved
       * @return {!PeerHandshakeBuilder}
       */
      setReserved(reserved) {
        this.reserved = reserved;
        return this;
      }

      /**
       * Sets a single reserved reserved bit.
       *
       * @param {!Number} byteIndex
       * @param {!Number} bitIndex
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setReservedBit([byteIndex, bitIndex], enabled) {
        if (enabled) {
          this.reserved[byteIndex] = this.reserved[byteIndex] & bitIndex;
        } else {
          this.reserved[byteIndex] = this.reserved[byteIndex] | bitIndex;
        }
        return this;
      }

      /**
       * Sets Azureus Messaging Protocol support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setAzureusMessagingProtocol(enabled) {
        return this.setReservedBit(
          Reserved.AZUREUS_MESSAGING_PROTOCOL,
          enabled
        );
      }

      /**
       * Sets BitTorrent Location-aware Protocol support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setBitTorrentLocationAwareProtocol(enabled) {
        return this.setReservedBit(
          Reserved.BITTORRENT_LOCATION_AWARE_PROTOCOL,
          enabled
        );
      }

      /**
       * Sets Libtorrent Extension Protocol support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setLibtorrentExtensionProtocol(enabled) {
        return this.setReservedBit(
          Reserved.LIBTORRENT_EXTENSION_PROTOCOL,
          enabled
        );
      }

      /**
       * Sets BitTorrent DHT support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setBitTorrentDHT(enabled) {
        return this.setReservedBit(Reserved.BITTORRENT_DHT, enabled);
      }

      /**
       * Sets Fast Extensions support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setFastExtensions(enabled) {
        return this.setReservedBit(Reserved.FAST_EXTENSIONS, enabled);
      }

      /**
       * Sets NAT Traversal support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setNATTraversal(enabled) {
        return this.setReservedBit(Reserved.NAT_TRAVERSAL, enabled);
      }

      /**
       * Sets Hybrid Legacy V2 Upgrade support.
       *
       * @param {!Boolean} enabled
       * @return {!PeerHandshakeBuilder}
       */
      setHybridLegacyV2Upgrade(enabled) {
        return this.setReservedBit(Reserved.HYBRID_LEGACY_V2_UPGRADE, enabled);
      }

      /**
       * Sets the info hash.
       *
       * @param {!String} infoHash
       * @return {!PeerHandshakeBuilder}
       */
      setInfoHash(infoHash) {
        this.infoHash = Buffer.from(infoHash, "hex");
        return this;
      }

      /**
       * Sets the peer id.
       *
       * @param {!String} infoHash
       * @return {!PeerHandshakeBuilder}
       */
      setPeerId(peerId) {
        this.peerId = Buffer.from(peerId, "utf-8");
        return this;
      }
    }
    return PeerHandshakeBuilder;
  }

  /**
   * Gets the protocol.
   *
   * @return {!String}
   */
  getProtocol() {
    return this.protocol_.toString("utf-8");
  }

  /**
   * Gets the reserved bits buffer.
   *
   * @return {!Buffer}
   */
  getReserved() {
    return this.reserved_;
  }

  /**
   * Gets the state of a single reserved bit.
   *
   * @return {!Boolean}
   */
  getReservedBit([byteIndex, bitIndex]) {
    return !!this.reserved[byteIndex] & bitIndex;
  }

  /**
   * Gets Azureus Messaging Protocol support.
   *
   * @return {!Boolean}
   */
  getAzureusMessagingProtocol() {
    return this.getReservedBit(Reserved.AZUREUS_MESSAGING_PROTOCOL);
  }

  /**
   * Gets BitTorrent Location-aware Protocol support.
   *
   * @return {!Boolean}
   */
  getBitTorrentLocationAwareProtocol() {
    return this.getReservedBit(Reserved.BITTORRENT_LOCATION_AWARE_PROTOCOL);
  }

  /**
   * Gets Libtorrent Extension Protocol support.
   *
   * @return {!Boolean}
   */
  getLibtorrentExtensionProtocol() {
    return this.getReservedBit(Reserved.LIBTORRENT_EXTENSION_PROTOCOL);
  }

  /**
   * Gets BitTorrent DHT support.
   *
   * @return {!Boolean}
   */
  getBitTorrentDHT() {
    return this.getReservedBit(Reserved.BITTORRENT_DHT);
  }

  /**
   * Gets Fast Extensions support.
   *
   * @return {!Boolean}
   */
  getFastExtensions() {
    return this.getReservedBit(Reserved.FAST_EXTENSIONS);
  }

  /**
   * Gets NAT Traversal support.
   *
   * @return {!Boolean}
   */
  getNATTraversal() {
    return this.getReservedBit(Reserved.NAT_TRAVERSAL);
  }

  /**
   * Gets Hybrid Legacy V2 Upgrade support.
   *
   * @return {!Boolean}
   */
  getHybridLegacyV2Upgrade() {
    return this.getReservedBit(Reserved.HYBRID_LEGACY_V2_UPGRADE);
  }

  /**
   * Gets the info hash.
   *
   * @return {!String}
   */
  getInfoHash() {
    return this.infoHash_.toString("hex");
  }

  /**
   * Gets the peer id.
   *
   * @return {!String}
   */
  getPeerId() {
    return this.peerId_.toString("utf-8");
  }

  /**
   * Returns a new buffer representing the class.
   *
   * @return {!Buffer}
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
}

module.exports = PeerHandshake;
