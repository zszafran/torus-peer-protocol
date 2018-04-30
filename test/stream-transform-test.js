const { expect } = require("./testutils");

const { PassThrough, Writable } = require("stream");

const data = require("./testdata");
const StreamTransform = require("../lib/stream-transform");

const buildStream_ = cb => {
  const socket = new PassThrough();
  const transform = new StreamTransform();

  socket.pipe(transform).pipe(
    new Writable({
      objectMode: true,
      write: (chunk, encoding, callback) => {
        cb(chunk);
        callback();
      }
    })
  );

  return socket;
};

describe("StreamTransform", () => {
  describe("Handshake", () => {
    it("should parse a handshake from a single chunk", done => {
      const stream = buildStream_(message => {
        expect(message.toBuffer()).to.equalBuffer(data.Handshake.BUFFER);
        done();
      });
      stream.write(data.Handshake.BUFFER);
    });

    it("should parse a handshake from multiple medium chunks", done => {
      const stream = buildStream_(message => {
        expect(message.toBuffer()).to.equalBuffer(data.Handshake.BUFFER);
        done();
      });
      stream.write(data.Handshake.BUFFER.slice(0, 20));
      stream.write(data.Handshake.BUFFER.slice(20));
    });

    it("should parse a handshake from multiple small chunks", done => {
      const stream = buildStream_(message => {
        expect(message.toBuffer()).to.equalBuffer(data.Handshake.BUFFER);
        done();
      });
      data.Handshake.BUFFER.forEach(val => {
        stream.write(Buffer.from([val]));
      });
    });
  });

  describe("Message", () => {
    it("should parse a bitfield message from a single chunk", done => {
      const messages = [];
      const stream = buildStream_(message => {
        messages.push(message);
        if (messages.length == 2) {
          expect(messages[1].toBuffer()).to.equalBuffer(data.Bitfield.BUFFER);
          done();
        }
      });
      stream.write(data.Handshake.BUFFER);
      stream.write(data.Bitfield.BUFFER);
    });

    it("should parse a bitfield message from multiple medium chunks", done => {
      const messages = [];
      const stream = buildStream_(message => {
        messages.push(message);
        if (messages.length == 2) {
          expect(messages[1].toBuffer()).to.equalBuffer(data.Bitfield.BUFFER);
          done();
        }
      });
      stream.write(data.Handshake.BUFFER);
      stream.write(data.Bitfield.BUFFER.slice(0, 7));
      stream.write(data.Bitfield.BUFFER.slice(7));
    });

    it("should parse a bitfield message from multiple small chunks", done => {
      const messages = [];
      const stream = buildStream_(message => {
        console.log(message);
        messages.push(message);
        if (messages.length == 2) {
          expect(messages[1].toBuffer()).to.equalBuffer(data.Bitfield.BUFFER);
          done();
        }
      });
      stream.write(data.Handshake.BUFFER);
      data.Bitfield.BUFFER.forEach(val => {
        stream.write(Buffer.from([val]));
      });
    });
  });
});
