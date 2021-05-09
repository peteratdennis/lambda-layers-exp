"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.capitaliseFirstLetter = void 0;

var capitaliseFirstLetter = function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

exports.capitaliseFirstLetter = capitaliseFirstLetter;
var _default = {
  capitaliseFirstLetter: capitaliseFirstLetter
};
exports["default"] = _default;