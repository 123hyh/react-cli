process.env.NODE_ENV = "devolopment";
const webpack = require("webpack");
const devCofig = require("../webpack/webpack.dev");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");

const server = new WebpackDevServer(
  webpack({
    ...devCofig,
    mode: "development",
  }),
  {
    compress: true,
    // contentBase: path.resolve(process.cwd(), "dist"),
    hot: true,
    inline: false,
    progress: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  }
);
server.listen(8080);
