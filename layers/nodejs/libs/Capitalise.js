"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.capitaliseFirstLetter = void 0;

const capitaliseFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

exports.capitaliseFirstLetter = capitaliseFirstLetter;
var _default = {
  capitaliseFirstLetter
};
exports.default = _default;