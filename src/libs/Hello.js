const Logger = require('./Logger');
const { capitaliseFirstLetter } = require('./Capitalise');

const handler = (event) => {
  Logger.debug('Event', event);
  const message = capitaliseFirstLetter('hello world!');
  return {
    message,
    event,
  };
};

module.exports = {
  handler,
};
