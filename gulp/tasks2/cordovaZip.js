const config = require('../config');
const { task, series } = require('gulp');
const del = require('del');
const tap = require('gulp-tap');
const zip = require('gulp-zip');


function cordovaClean() {
  return del([config.cordovaZip.tmpFolder], {force: true});
};

 function cordovaCopyApp() {
  return gulp.src(config.cordovaZip.srcApp)
    .pipe(gulp.dest(config.cordovaZip.tmpFolder));
};

function cordovaCopyConf() {
  return gulp.src(config.cordovaZip.srcConf, {
      base: './'
    })
    .pipe(gulp.dest(config.cordovaZip.tmpFolder));
};

function cordovaZipFolder() {
  return gulp.src(config.cordovaZip.tmpFolder + '/**/*')
    .pipe(tap(function(file) {
        if (file.isDirectory()) {
          file.stat.mode = parseInt('40777', 8);
        }
    }))
    .pipe(zip('www.zip'))
    .pipe(gulp.dest(config.cordovaZip.dest));
};

task('cordovaZip', series(cordovaClean, cordovaCopyApp, cordovaCopyConf, cordovaZipFolder, cordovaClean));
