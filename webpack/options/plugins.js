const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProd = argv.production;
class Plugins {
  constructor() {
    this.plugins = [
      /* webpack plugins 执行顺序 右 -> 左 */
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(process.cwd(), 'public/index.html'),
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: 'styles/[name].[contenthash].css',
          // chunkFilename: "styles/[id].[chunkhash].css",
        }),
      !isProd && new webpack.NamedModulesPlugin(),
      !isProd && new webpack.HotModuleReplacementPlugin(),
      !isProd &&
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [`您的应用程序正在这里运行: http://localhost:8080`],
          },
          clearConsole: true,
        }),
    ].filter(Boolean);
  }
  add(pluginItem) {
    this.plugins.push(pluginItem);
  }
}
module.exports = new Plugins();
