var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.entry = {};
webpackConfig.node = {fs: 'empty'};

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    autoRun: true, 
    frameworks: [ 'jasmine-jquery', 'jasmine' ], //use the mocha test framework
    files: [
      './node_modules/promise-polyfill/promise.js', //for promise in code to work in PhantomJS
      'libs/tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'libs/tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  });
};