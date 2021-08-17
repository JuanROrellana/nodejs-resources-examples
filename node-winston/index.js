import { appLogger } from "./logger/index.js";

appLogger.log('info', 'Hello distributed log files!');
appLogger.info('Hello again distributed logs');

appLogger.level = 'debug';
appLogger.log('debug', 'Now my debug messages are written to console!');

// console.log('hello');
// console.info('text info');
// console.warn('text warn');
// console.error('text error');
// console.error(new Error('something went wrong'));

