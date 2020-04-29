const entry = require('./options/entry');
const output = require('./options/output');
const rules = require('./options/module/rules');
const resolve = require('./resolve');
const plugins = require('./options/plugins');
const argv = require('yargs').argv;

module.exports = {
  entry: entry.entry,
  output: output.output,
  devtool: argv.production ? '' : 'source-map',
  module: {
    rules: rules.rules,
  },
  plugins: [...plugins.plugins],
  resolve,
};
