/*
 * @Author: your name
 * @Date: 2020-04-23 19:39:04
 * @LastEditTime: 2020-12-11 08:15:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-cli/scripts/devolopment.js
 */
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
      '/api':{
        target: 'http://119.29.151.93:9998',
        changeOrigin: true,
        pathRewrite: {
          '^/company': '',
        },
      }
    },
    overlay: {
      warnings: false,
      errors: true,
    },
  }
);
server.listen(8080);
