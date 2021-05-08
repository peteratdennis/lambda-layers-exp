
import { capitaliseFirstLetter } from './Capitalise';

export const handler = (event) => {
  const message = capitaliseFirstLetter('hello world!');
  return {
    message,
    event,
  };
};

export default {
  handler,
};
