const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../../build'),
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
