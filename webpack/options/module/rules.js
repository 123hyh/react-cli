const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = argv.production;
class Rules {
  constructor() {
    this.limit = { limit: 8192 };
    this.styleLoader = isProd
      ? {
          loader: MiniCssExtractPlugin.loader,
        }
      : 'style-loader';

    this.rules = [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          { loader: 'ts-loader' },
          /* !isProd && {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          }, */
        ].filter(Boolean),
      },
      {
        test: /\.css$/,
        use: [this.styleLoader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          this.styleLoader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|icon)$/i,
        use: [{ loader: 'url-loader', options: this.limit }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [{ loader: 'url-loader', options: this.limit }],
      },
    ];
  }
  add(rulesItem) {
    this.rules.push(rulesItem);
  }
}
module.exports = new Rules();
