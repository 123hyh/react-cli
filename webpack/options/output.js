const path = require("path");
class Output {
  constructor() {
    this.output = {
      filename: "[name].bundle.js",
      path: path.resolve(process.cwd(), "dist"),
    };
  }
}
module.exports = new Output();
