
const { capitaliseFirstLetter } = require('../libs/Capitalise');

const handler = (event) => {
  const message = capitaliseFirstLetter('hello world!');
  return {
    message,
    event,
  };
};

module.exports = {
  handler,
};
