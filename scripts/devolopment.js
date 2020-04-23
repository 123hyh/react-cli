process.env.NODE_ENV = 'devolopment';
const webpack = require('webpack');
const devCofig = require('../webpack/webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

const server = new WebpackDevServer(
  webpack({
    ...devCofig,
    mode: 'development',
  }),
  {
    compress: true,
    contentBase: path.resolve(process.cwd(), 'dist'),
    hot: true,
    progress: true,
    quiet: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  }
);
server.listen(8080);
