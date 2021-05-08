const Logger = require('../libs/Logger');
const { handler } = require('../libs/Hello');

//const { capitaliseFirstLetter } = require('../libs/Capitalise');

// AWS lambda does not support ES6 :( Need Webpack for it.
// import { capitaliseFirstLetter } from '../libs/CapitaliseES6';
// const { handler } = require('../libs/HelloES6.mjs');
// import { handler } from '../libs/HelloES6.mjs';

/**
 * sls invoke --function hello --data='{"some": "stuff"}'
 */
exports.handler = async function(event) {
  Logger.debug('Event', event);
  return handler(event);
  // const message = capitaliseFirstLetter('hello world!');
  // return {
  //   message,
  //   event,
  // };
}
