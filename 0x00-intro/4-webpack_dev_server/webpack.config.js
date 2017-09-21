const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devServer: {
    host:'0.0.0.0',
    port: 5000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton School webpack',
      filename: 'index.html'
    })
  ]
};
