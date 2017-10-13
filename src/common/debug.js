
import * as debugModule from 'debug';

export const PREFIX = 'bookat';

export const debug = debugModule(PREFIX);

export default debug;

global.debug = debug;

export const debugFactory = (ns) => {
  const debugInstance = debugModule(`${PREFIX}:${ns}`);
  debugInstance.error = debug.error;
  return debugInstance;
};

debug.factory = debugFactory;

export const debugError = debugModule(`${PREFIX}:error`);

debug.error = debugError;


if (process.env.NODE_ENV === 'development' && localStorage && !localStorage.debug) {
  localStorage.debug = `${PREFIX}*`;
}
