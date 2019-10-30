const webpack = require('webpack');
const path = require('path');

const srcDir = '../lib/';

module.exports = {
  entry: {
    client: path.join(__dirname, srcDir + 'index.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  module: { },
  resolve: { extensions: ['.js'], },
  plugins: [ ],
};
