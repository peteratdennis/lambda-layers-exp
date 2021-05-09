"use strict";

var md5 = require('md5');

var getMd5 = function getMd5(string) {
  return md5(string);
};

module.exports = {
  getMd5: getMd5
};