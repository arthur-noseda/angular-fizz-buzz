'use strict';

var glob = require('glob');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    angular: [
      './node_modules/angular/angular',
      './node_modules/angular-animate/angular-animate',
      './node_modules/angular-cookies/angular-cookies',
      './node_modules/angular-resource/angular-resource',
      './node_modules/angular-route/angular-route',
      './node_modules/angular-sanitize/angular-sanitize'
    ],
    main: glob.sync('./app/scripts/**/*.js')
  },
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, 'dist'),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: '[name].bundle-[hash:6].js'
    // the filename template for entry chunks
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
  // list of additional plugins
}
