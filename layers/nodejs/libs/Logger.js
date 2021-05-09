"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Implements https://github.com/php-fig/log/blob/master/Psr/Log/LoggerInterface.php :)
 */

/**
 * Get supporting log level, also based on environment setting
 * Currently, they are: emergency, alert, critical, error, warning, notice, info, debug
 *
 * @returns {array}
 */
var getSupportLoggingLevels = function getSupportLoggingLevels() {
  var level = process.env.loggingLevel ? process.env.loggingLevel.toLowerCase() : 'error';
  return ['emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug'].reduce(function (a, c, i, arr) {
    var found = arr.indexOf(level);

    if (found === -1 || found > -1 && i <= found) {
      a.push(c);
    }

    return a;
  }, []);
};
/**
 * Logs with an arbitrary level.
 * It does not log if type is not supported
 *
 * @param message
 * @param message
 * @param context
 */


var log = function log(type, message) {
  var levels = getSupportLoggingLevels();

  if (levels.indexOf(type.toLowerCase()) < 0) {
    return;
  }

  for (var _len = arguments.length, context = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    context[_key - 2] = arguments[_key];
  }

  var logMessages = context.map(function (i) {
    return i;
  });

  switch (type.toLowerCase()) {
    case 'emergency':
    case 'critical':
    case 'error':
      // eslint-disable-next-line no-console
      console.error.apply(null, ["".concat(type.toLowerCase(), ": "), "".concat(message)].concat(_toConsumableArray(logMessages)));
      break;

    case 'alert':
    case 'warning':
      // eslint-disable-next-line no-console
      console.warn.apply(null, ["".concat(type.toLowerCase(), ": "), "".concat(message)].concat(_toConsumableArray(logMessages)));
      break;

    case 'notice':
    case 'info':
      // eslint-disable-next-line no-console
      console.info.apply(null, ["".concat(type.toLowerCase(), ": "), "".concat(message)].concat(_toConsumableArray(logMessages)));
      break;

    default:
      // eslint-disable-next-line no-console
      console.debug.apply(null, ["".concat(type.toLowerCase(), ": "), "".concat(message)].concat(_toConsumableArray(logMessages)));
      break;
  }
};
/**
 * Runtime errors that do not require immediate action but should typically
 * be logged and monitored.
 *
 * @param message
 * @param context
 */


var error = function error(message) {
  for (var _len2 = arguments.length, context = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    context[_key2 - 1] = arguments[_key2];
  }

  log.apply(void 0, ['error', message].concat(context));
};
/**
 * Exceptional occurrences that are not errors.
 *
 * @param message
 * @param context
 */


var warning = function warning(message) {
  for (var _len3 = arguments.length, context = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    context[_key3 - 1] = arguments[_key3];
  }

  log.apply(void 0, ['warning', message].concat(context));
};
/**
 * Raise important message
 *
 * @param message
 * @param context
 */


var alert = function alert(message) {
  for (var _len4 = arguments.length, context = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    context[_key4 - 1] = arguments[_key4];
  }

  log.apply(void 0, ['alert', message].concat(context));
};
/**
 * Normal but significant events.
 *
 * @param message
 * @param context
 */


var notice = function notice(message) {
  for (var _len5 = arguments.length, context = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    context[_key5 - 1] = arguments[_key5];
  }

  log.apply(void 0, ['notice', message].concat(context));
};
/**
 * Interesting events.
 *
 * Example: User logs in, SQL logs.
 *
 * @param message
 * @param context
 */


var info = function info(message) {
  for (var _len6 = arguments.length, context = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    context[_key6 - 1] = arguments[_key6];
  }

  log.apply(void 0, ['info', message].concat(context));
};
/**
 * Detailed debug information.
 *
 * @param message
 * @param context
 */


var debug = function debug(message) {
  for (var _len7 = arguments.length, context = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    context[_key7 - 1] = arguments[_key7];
  }

  log.apply(void 0, ['debug', message].concat(context));
};

module.exports = {
  log: log,
  alert: alert,
  error: error,
  warning: warning,
  notice: notice,
  info: info,
  debug: debug
};