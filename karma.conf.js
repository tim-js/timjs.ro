var webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry;

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    files: [
      'src/**Vue/*.spec.js'
    ],

    preprocessors: {
      'src/**Vue/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },

    singleRun: true
  });
};
