var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (accept) {
    return ['.bin'].indexOf(accept) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: resolve('server/bin/www.js'),
  output: {
    path: resolve('dist'),
    filename: 'backend.js'
  },
  resolve: {
    modules: [
      "node_modules",
      resolve("server")
    ],
    extensions: ['.js', '.json']
  },
  target: 'node',
  context: resolve(''),
  node: {
    __dirname: false,
    __filename: false
  },
  externals: nodeModules,
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          resolve("node_modules")
        ],
        enforce: "pre",
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          resolve("node_modules")
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: [
          resolve("node_modules")
        ],
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __PROD__: true
    }),
    new webpack.ProvidePlugin({
      '_': 'lodash',
      '_math': 'lodash_math'
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('server/views'),
        to: 'views',
        ignore: ['.*']
      }
    ])
  ]
};
