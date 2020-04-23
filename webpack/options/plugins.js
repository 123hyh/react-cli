const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
class Plugins {
  constructor() {
    this.dynamicPlugins = argv.production
      ? [
          new MiniCssExtractPlugin({
            filename: 'styles/[name].[chunkhash].css',
            chunkFilename: 'styles/[id].[chunkhash].css',
          }),
        ]
      : [
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin(),
        ];

    this.plugins = [
      new CleanWebpackPlugin(),
      ...this.dynamicPlugins,
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(process.cwd(), 'public/index.html'),
      }),
    ];
  }
  add(pluginItem) {
    this.plugins.push(pluginItem);
  }
}
module.exports = new Plugins();
