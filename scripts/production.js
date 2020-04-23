const webpack = require("webpack");
const config = require("../webpack/webpack");
const prodConfig = webpack({ ...config, mode: "production" });
prodConfig.run();
