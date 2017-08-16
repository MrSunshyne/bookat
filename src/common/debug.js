const debugModule = require('debug');

export const debug = debugModule('bookat');

export default debug;

global.debug = debug;

export const debugFactory = (ns) => {
  const debugInstance = debugModule(`bookat:${ns}`);
  debugInstance.error = debug.error;
  return debugInstance;
};

debug.factory = debugFactory;

export const debugError = debugModule('bookat:error');

debug.error = debugError;
