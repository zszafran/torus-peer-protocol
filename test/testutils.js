const bufferEqual = require('buffer-equal');
const chai = require('chai');
const expect = chai.expect;
const Assertion = chai.Assertion;

chai.use((_chai, utils) => {
  Assertion.addMethod('equalBuffer', function (buffer) {
    new Assertion(this._obj).to.be.instanceof(Buffer);
    this.assert(
      bufferEqual(this._obj, buffer),
      "expected #{exp} to be #{act}",
      "expected #{exp} to not be #{act}",
      buffer,
      this._obj
    );
  });
});

module.exports = {
  expect,
};