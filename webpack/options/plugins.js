const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
class Plugins {
  constructor() {
    this.plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(process.cwd(), "public/index.html"),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ];
  }
  add(pluginItem) {
    this.plugins.push(pluginItem);
  }
}
module.exports = new Plugins();
