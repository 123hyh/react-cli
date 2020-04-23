const path = require("path");
class Entry {
  constructor() {
    this.entry = {
      index: path.resolve(process.cwd(), "src/index.tsx"),
    };
  }
  add(name, url) {
    this.entry[name] = url;
  }
}
module.exports = new Entry();
