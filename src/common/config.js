
import { debugFactory } from '@/common/debug';

const debug = debugFactory('@/common/config');

const CONFIG = {};

export default CONFIG;

const CONFIG_OVERRIDE = {};

if (localStorage && localStorage.CONFIG_OVERRIDE) {
  try {
    Object.assign(CONFIG_OVERRIDE, JSON.parse(localStorage.CONFIG_OVERRIDE));
  } catch (e) {
    debug(e);
  }
}

debug('CONFIG_OVERRIDE', CONFIG_OVERRIDE);

CONFIG.ENV = process.env.NODE_ENV;

Object.assign(CONFIG, CONFIG_OVERRIDE);

debug('CONFIG', CONFIG);
