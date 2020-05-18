const config = require('../config');
const { watch, series } = require('gulp');
const copyBundles = require('./copyBundles');

function watchFiles(done) {
  watch(config.scripts.src, series(copyBundles.copyJS));
  watch(config.styles.src, series(copyBundles.copyCSS));
  done();
};

module.exports = { watchFiles };