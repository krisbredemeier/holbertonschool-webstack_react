const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton School webpack',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  watchOptions: {
    poll: 1000
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
//
// module.exports = {
//   entry: './src/index.js',
//   devServer: {
//     host:'0.0.0.0',
//     port: 5000,
//     hot: true
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index.bundle.js'
//   },
//   watchOptions: {
//     poll: 1000,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Holberton School webpack',
//       filename: 'index.html',
//       template: './src/index.html'
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// };
