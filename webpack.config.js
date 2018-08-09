const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    entry: './src/index.js' // ./path/to/entry/file.js
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  plugins : [
    new HtmlWebpackPlugin({
    template: './src/index.html' // ./path/to/entry/file.html
    })
  ],
  devServer: {
    contentBase : './dist'
  }
};