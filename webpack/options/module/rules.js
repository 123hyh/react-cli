const path = require("path");
class Rules {
  constructor() {
    this.limit = { limit: 8192 };
    this.rules = [
      {
        test: /\.tsx?$/i,
        include: [path.resolve(process.cwd(), "src")],
        use: ["babel-loader", { loader: "ts-loader" }],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [{ loader: "url-loader", options: this.limit }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [{ loader: "url-loader", options: this.limit }],
      },
    ];
  }
  add(rulesItem) {
    this.rules.push(rulesItem);
  }
}
module.exports = new Rules();
