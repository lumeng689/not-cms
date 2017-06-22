require('./check-versions')()

process.env.NODE_ENV = 'development'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var ProgressPlugin = require('webpack/lib/ProgressPlugin')
var ProgressBar = require('progress')
var config = require('../config')
var webpackBackendConfig = require('./webpack.server')
var nodemon = require('nodemon');

var spinner = ora('building server for development...')
spinner.start()

var compiler = webpack(webpackBackendConfig);

var buildError = false;
function onBuild (callback) {
  return function (err, stats) {
    if (err) {
      buildError = true;
      console.log(err.red);
    } else {
      buildError = buildError || stats.compilation.errors.length > 0;
      console.log(stats.toString({
        colors: true
      }));
    }
    if (callback) {
      callback();
    }
  }
}

var firstStart = true;

compiler.watch(100, function (err, stats) {
  onBuild()(err, stats);

  spinner.stop()
  if (err) {
    throw err
  }
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

  console.log(chalk.cyan('  Build server complete.\n'))

  if (firstStart) {
    firstStart = false;
    nodemon({
      execMap: {
        js: 'node'
      },
      script: path.join(__dirname, '../dist/backend'),
      ignore: ['*'],
      watch: ['foo/'],
      ext: 'noop'
    }).on('restart', function () {
      console.log(chalk.green('Starting express server !'));
    });
  } else {
    nodemon.restart();
  }
});
