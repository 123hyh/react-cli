const path = require("path");
const argv = require("yargs").argv;
const isProd = argv.production
class Entry {
  constructor() {
    this.entry = [
      !isProd && "react-hot-loader/patch",
      path.resolve(process.cwd(), "src/index.tsx"),
    ].filter(Boolean);
  }
  add(name, url) {
    this.entry[name] = url;
  }
}
module.exports = new Entry();
