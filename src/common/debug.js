const debugModue = require('debug');

export const debug = debugModue('bookat');

export default debug;

global.debug = debug;

export const debugFactory = (ns) => {
  const debugInstance = debugModue(`bookat:${ns}`);
  debugInstance.error = debug.error;
  return debugInstance;
};

debug.factory = debugFactory;

export const debugError = debugModue('bookat:error');

debug.error = debugError;
