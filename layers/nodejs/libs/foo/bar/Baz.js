"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMd5 = function getMd5(string) {
  return (0, _md["default"])(string);
};

var _default = {
  getMd5: getMd5
};
exports["default"] = _default;