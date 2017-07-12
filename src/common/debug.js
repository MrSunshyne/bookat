const debugModue = require('debug');

const debug = debugModue('bookat');

debug.error = debugModue('bookat:error');

global.debug = debug;

export default debug;
