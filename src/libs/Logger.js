/**
 * Implements https://github.com/php-fig/log/blob/master/Psr/Log/LoggerInterface.php :)
 */

/**
 * Get supporting log level, also based on environment setting
 * Currently, they are: emergency, alert, critical, error, warning, notice, info, debug
 *
 * @returns {array}
 */
 const getSupportLoggingLevels = () => {
  // For some unknown reason process.env.loggingLevel is undefined when running tests on Jenkins.
  const level = process.env.loggingLevel ? process.env.loggingLevel.toLowerCase() : 'error';
  return [
    'emergency',
    'alert',
    'critical',
    'error',
    'warning',
    'notice',
    'info',
    'debug',
  ].reduce((a, c, i, arr) => {
    const found = arr.indexOf(level);
    if (found === -1 || (found > -1 && i <= found)) {
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
const log = (type, message, ...context) => {
  const levels = getSupportLoggingLevels();
  if (levels.indexOf(type.toLowerCase()) < 0) {
    return;
  }

  const logMessages = context.map((i) => {
    return i;
  });

  switch (type.toLowerCase()) {
    case 'emergency':
    case 'critical':
    case 'error':
      // eslint-disable-next-line no-console
      console.error.apply(null, [
        `${type.toLowerCase()}: `,
        `${message}`,
        ...logMessages,
      ]);
      break;
    case 'alert':
    case 'warning':
      // eslint-disable-next-line no-console
      console.warn.apply(null, [
        `${type.toLowerCase()}: `,
        `${message}`,
        ...logMessages,
      ]);
      break;
    case 'notice':
    case 'info':
      // eslint-disable-next-line no-console
      console.info.apply(null, [
        `${type.toLowerCase()}: `,
        `${message}`,
        ...logMessages,
      ]);
      break;
    default:
      // eslint-disable-next-line no-console
      console.debug.apply(null, [
        `${type.toLowerCase()}: `,
        `${message}`,
        ...logMessages,
      ]);
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
const error = (message, ...context) => {
  log('error', message, ...context);
};

/**
 * Exceptional occurrences that are not errors.
 *
 * @param message
 * @param context
 */
const warning = (message, ...context) => {
  log('warning', message, ...context);
};

/**
 * Raise important message
 *
 * @param message
 * @param context
 */
const alert = (message, ...context) => {
  log('alert', message, ...context);
};

/**
 * Normal but significant events.
 *
 * @param message
 * @param context
 */
const notice = (message, ...context) => {
  log('notice', message, ...context);
};

/**
 * Interesting events.
 *
 * Example: User logs in, SQL logs.
 *
 * @param message
 * @param context
 */
const info = (message, ...context) => {
  log('info', message, ...context);
};

/**
 * Detailed debug information.
 *
 * @param message
 * @param context
 */
const debug = (message, ...context) => {
  log('debug', message, ...context);
};

module.exports = {
  log,
  alert,
  error,
  warning,
  notice,
  info,
  debug,
};
