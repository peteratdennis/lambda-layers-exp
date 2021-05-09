"use strict";

/**
 * A module from node_modules located at layers/nodejs/node_modules.
 *
 * node_modules is supposed to be located in the special path
 * `nodejs/node_modules` to be included without a PATH
 * see https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html#configuration-layers-path
 * BUT when deployed with this service's configuration it ends up in
 * `/opt/node_modules` NOT `/opt/nodejs/node_modules` which is what NODE_PATH reffers to.
 * The require works fine though.
 * I mention it, if in future there's a problem.
 */
const {
  v4: uuidv4
} = require('uuid'); // Modules from this directory.


const Logger = require('./Logger');

const {
  capitaliseFirstLetter
} = require('./Capitalise').default;

const {
  getMd5
} = require('./foo/bar/Baz').default;

const handler = event => {
  Logger.info('Event', event);
  return {
    message: capitaliseFirstLetter('hello world!'),
    event,
    uuid: uuidv4(),
    md5: getMd5('Loaded from node_modules from sub directory')
  };
};

module.exports = {
  handler
};