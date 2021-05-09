const fs = require('fs');

/**
 * Layers are located in /opt when deployed.
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
