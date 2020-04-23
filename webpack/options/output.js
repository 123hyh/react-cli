const path = require('path');
const argv = require('yargs').argv;
const filename = `js/[name]${argv.production ? '.[chunkhash]' : ''}.js`;
class Output {
  constructor() {
    this.output = {
      filename,
      path: path.resolve(process.cwd(), 'dist'),
    };
  }
}
module.exports = new Output();
