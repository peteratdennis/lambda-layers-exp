
const md5 = require('md5');

const getMd5 = string => md5(string);

module.exports = {
  getMd5,
};
