
const { handler } = require('../libs/Hello');

/**
 * sls invoke --function hello --data='{"some": "stuff"}'
 */
exports.handler = async (event) => handler(event);
