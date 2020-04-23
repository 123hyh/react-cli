const entry = require("./options/entry");
const output = require("./options/output");
const rules = require("./options/module/rules");
const resolve = require("./resolve");
const plugins = require("./options/plugins");
module.exports = {
  entry: entry.entry,
  output: output.output,
  devtool: "source-map",
  module: {
    rules: rules.rules,
  },
  plugins: [...plugins.plugins],
  resolve,
};
