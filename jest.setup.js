if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = require('util').TextDecoder;
  global.TextEncoder = TextDecoder;
}
