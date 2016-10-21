const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'eval',
  entry: {
    // multiple entry points
    editions: APP_DIR + '/editions/index.js',
  },
  output: {
    path: BUILD_DIR,
    // [name] is placeholder for entry property name
    // when dealing with multiple entry points
    // will be replaced with it (eg. "editions")
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: APP_DIR
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
