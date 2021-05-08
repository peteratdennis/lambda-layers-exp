
/**
 * Layers are located in /opt when deployed.
 * node_modules is located in the special nodejs/node_modules to be
 * included without a PATH
 * see https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html#configuration-layers-path
 */
const { handler } = require('/opt/libs/Hello');

/**
 * sls invoke --function hello --data='{"some": "stuff"}'
 */
exports.handler = async (event) => handler(event);
