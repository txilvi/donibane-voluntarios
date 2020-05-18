const config = require('../config');
const { src, dest, series } = require('gulp');
const clean = require('./clean');

function copyJSfunc() {
  return src(config.scripts.src)
    .pipe(dest(config.scripts.dest));
};

function copyCSSfunc() {
  return src(config.styles.src)
    .pipe(dest(config.styles.dest));
};

function copyBundlesfunc() {
  return src(config.build.src)
    .pipe(dest(config.build.dest));
};


var copyJS = series(clean.cleanJS, copyJSfunc);
var copyCSS = series(clean.cleanCSS, copyCSSfunc);
var copyBundles = series(clean.clean, copyBundlesfunc);

module.exports = { copyJS, copyCSS, copyBundles };