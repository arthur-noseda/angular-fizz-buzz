'use strict';

var glob = require('glob');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    bootstrap: './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
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

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'bootstrap', 'angular' ]
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'bootstrap/css' },
      { from: 'node_modules/bootstrap/dist/fonts', to: 'bootstrap/fonts' },
    ])
  ]
  // list of additional plugins
}
