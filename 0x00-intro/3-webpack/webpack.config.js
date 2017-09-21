const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
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
