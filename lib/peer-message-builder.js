/**
 * Base class for a peer message builder.
 */
class PeerMessageBuilder {
  /**
   * Constructs a new builder instance.
   *
   * @param {?} newClass
   * @param {!MessageType} type
   */
  constructor(newClass, type) {
    this.type = type;
    this.newClass = newClass;
  }

  /**
   * Returns a new message instance populated from the builder.
   *
   * @return {?}
   */
  build() {
    return new this.newClass(this);
  }
}

module.exports = PeerMessageBuilder;
