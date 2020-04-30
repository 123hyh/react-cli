const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CompressionPlugin  = require('compression-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

const isProd = argv.production;
const env = argv.env || 'devolopment'
const CURRENT_ENV_CONFIG = require('../env')[env]
console.log(`当前构建环境：${env}`)

class Plugins {
  constructor() {
    this.plugins = [
      /* webpack plugins 执行顺序 右 -> 左 */
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(process.cwd(), 'public/index.html'),
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: 'styles/[name].[contenthash].css',
          // chunkFilename: "styles/[id].[chunkhash].css",
        }),
      !isProd && new webpack.NamedModulesPlugin(),
      !isProd && new webpack.HotModuleReplacementPlugin(),
        /* gzip 压缩 */
      isProd && new CompressionPlugin({
        cache: true,
        threshold: 8192,
        algorithm: 'gzip'
      }),

      !isProd &&
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`您的应用程序正在这里运行: http://localhost:8080`],
        },
        clearConsole: true,
      }),
      /* 定义环境变量 */
      new webpack.DefinePlugin(CURRENT_ENV_CONFIG),
      /* dll插件 */
      isProd &&  new webpack.DllReferencePlugin({
        context: path.resolve(process.cwd(),'scripts'),
        manifest: require(path.resolve(process.cwd(),'scripts/buildDll/vendor-manifest.json')),
      }),
      isProd && new AddAssetHtmlPlugin({
        filepath: path.resolve(process.cwd(), 'scripts/buildDll/*.dll.js'),
        outputPath: 'dll'
      })
    ].filter(Boolean);
  }
  add(pluginItem) {
    this.plugins.push(pluginItem);
  }
}
module.exports = new Plugins();
