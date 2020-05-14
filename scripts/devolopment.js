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
    // progress: true,
    quiet: true,
    historyApiFallback: true,
    proxy: {
      '/test': {
        target: 'http://47.106.230.157:8080/apis',
        changeOrigin: true,
        pathRewrite: {
          '^/test': '',
        },
      },
      '/service':{
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/service': '',
        },
      },
    },
    overlay: {
      warnings: false,
      errors: true,
    },
  }
);
server.listen(8080);
