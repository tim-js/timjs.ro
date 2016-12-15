const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'eval',
  entry: {
    // multiple entry points
    editionsReact: APP_DIR + '/editionsReact/index.js',
    editionsVue  : APP_DIR + '/editionsVue/index.js',
  },
  output: {
    path: BUILD_DIR,
    // [name] is placeholder for entry property name
    // when dealing with multiple entry points
    // will be replaced with it (eg. "editions")
    filename: '[name].bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css', {
      allChunks: true
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: APP_DIR
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
};
