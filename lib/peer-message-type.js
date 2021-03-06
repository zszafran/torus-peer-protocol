/**
 * Enum of possible message types.
 *
 * @enum {?Number}
 */
const MessageTypes = {
  HANDSHAKE: -1,
  KEEP_ALIVE: null,
  CHOKE: 0,
  UNCHOKE: 1,
  INTERESTED: 2,
  NOT_INTERESTED: 3,
  HAVE: 4,
  BITFIELD: 5,
  REQUEST: 6,
  PIECE: 7,
  CANCEL: 8,
  PORT: 9,
  EXTENDED: 20
};

module.exports = MessageTypes;
