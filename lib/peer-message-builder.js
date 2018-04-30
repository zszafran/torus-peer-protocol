module.exports = class PeerMessageBuilder {
  constructor(newClass, type) {
    this.type = type;
    this.newClass = newClass;
  }

  build() {
    return new this.newClass(this);
  }
};
