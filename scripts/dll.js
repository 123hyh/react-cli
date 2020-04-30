const path = require('path');
const webpack = require('webpack');
const webpackConfig = {
  entry: {
    vendor: ['react', 'react-dom','redux','redux-react-hook', 'react-router-dom'],
  },
  mode:"production",
  output: {
    path: path.join(__dirname, 'buildDll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'buildDll', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
};
webpack(webpackConfig) .run()