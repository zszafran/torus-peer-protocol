const Bitfield = {
  BUFFER: Buffer.from("0000000605FFFFFFFFFF", "hex"),
  BUFFER_TRIMMED: Buffer.from("05FFFFFFFFFF", "hex"),
  BITFIELD: Buffer.from("FFFFFFFFFF", "hex")
};

const Cancel = {
  BUFFER: Buffer.from("0000000d08000000010000000200000003", "hex"),
  BUFFER_TRIMMED: Buffer.from("08000000010000000200000003", "hex"),
  INDEX: 1,
  BEGIN: 2,
  LENGTH: 3
};

const Choke = {
  BUFFER: Buffer.from("0000000100", "hex"),
  BUFFER_TRIMMED: Buffer.from("00", "hex")
};

const Extended = {
  BUFFER: Buffer.from("000000081401aabbccddeeff", "hex"),
  BUFFER_TRIMMED: Buffer.from("1401aabbccddeeff", "hex"),
  EXTENDED_TYPE: 1,
  EXTENDED_PAYLOAD: Buffer.from("aabbccddeeff", "hex")
};

const Handshake = {
  BUFFER: Buffer.from(
    "13426974546f7272656e742070726f746f636f6c0000000000100005f07e0b0584745b7bcb35e98097488d34e68623d02d7142333331302d31357a465f50295a735f6237",
    "hex"
  ),
  BUFFER_TRIMMED: Buffer.from(
    "426974546f7272656e742070726f746f636f6c0000000000100005f07e0b0584745b7bcb35e98097488d34e68623d02d7142333331302d31357a465f50295a735f6237",
    "hex"
  ),
  PROTOCOL: "BitTorrent protocol", // utf-8
  RESERVED: Buffer.from("0000000000100005", "hex"),
  INFO_HASH: "f07e0b0584745b7bcb35e98097488d34e68623d0", // hex
  PEER_ID: "-qB3310-15zF_P)Zs_b7" // utf-8
};

const Have = {
  BUFFER: Buffer.from("000000050400000001", "hex"),
  BUFFER_TRIMMED: Buffer.from("0400000001", "hex"),
  INDEX: 1
};

const Interested = {
  BUFFER: Buffer.from("0000000102", "hex"),
  BUFFER_TRIMMED: Buffer.from("02", "hex")
};

const Keepalive = {
  BUFFER: Buffer.from("00000000", "hex")
};

const NotInterested = {
  BUFFER: Buffer.from("0000000103", "hex"),
  BUFFER_TRIMMED: Buffer.from("03", "hex")
};

const Piece = {
  BUFFER: Buffer.from("0000000f070000000100000002aabbccddeeff", "hex"),
  BUFFER_TRIMMED: Buffer.from("070000000100000002aabbccddeeff", "hex"),
  INDEX: 1, // 4
  BEGIN: 2, // 4
  BLOCK: Buffer.from("aabbccddeeff", "hex") // 6
};

const Port = {
  BUFFER: Buffer.from("00000003091f90", "hex"),
  BUFFER_TRIMMED: Buffer.from("091f90", "hex"),
  PORT: 8080
};

const Request = {
  BUFFER: Buffer.from("0000000d06000000010000000200000003", "hex"),
  BUFFER_TRIMMED: Buffer.from("06000000010000000200000003", "hex"),
  INDEX: 1,
  BEGIN: 2,
  LENGTH: 3
};

const Unchoke = {
  BUFFER: Buffer.from("0000000101", "hex"),
  BUFFER_TRIMMED: Buffer.from("01", "hex")
};

module.exports = {
  Bitfield,
  Cancel,
  Choke,
  Extended,
  Handshake,
  Have,
  Interested,
  Keepalive,
  NotInterested,
  Piece,
  Port,
  Request,
  Unchoke
};
