const path = require("path");
const argv = require('yargs').argv
const isProd = argv.production
module.exports = {
  "@": path.resolve(process.cwd(), "src"),
  "react-dom": isProd ? 'react-dom' : "@hot-loader/react-dom",
};
