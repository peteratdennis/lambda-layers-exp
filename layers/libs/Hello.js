
// A module from node_modules located at layers/nodejs/node_modules
const { v4: uuidv4 } = require('uuid');

// Modules from this directory.
const Logger = require('./Logger');
const { capitaliseFirstLetter } = require('./Capitalise');

const handler = (event) => {
  Logger.info('Event', event);
  return {
    message: capitaliseFirstLetter('hello world!'),
    event,
    uuid: uuidv4(),
  };
};

module.exports = {
  handler,
};
