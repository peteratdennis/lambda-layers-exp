const fs = require('fs');

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
exports.handler = async (event) => {
  const files = []
  fs.readdirSync('/opt').forEach(file => {
    files.push(file);
  });

  return {
    env: process.env,
    files,
    result: handler(event),
  };
};
