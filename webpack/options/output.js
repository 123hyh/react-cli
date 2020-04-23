const path = require("path");
const argv = require("yargs").argv;
class Output {
  constructor() {
    this.output = {
      filename: "[name].bundle.js",
      path: path.resolve(process.cwd(), "dist"),
    };
  }
}
module.exports = new Output();
