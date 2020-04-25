var config = require('../config');
var gulp = require('gulp');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');


gulp.task('revisioning-hash', function() {
  let timeStamp = new Date().getTime();
  return gulp.src(config.revisioning.replace)
    .pipe(replace(new RegExp('main\\.js', 'g'), 'main.js?v=' + timeStamp))
    .pipe(replace(new RegExp('vendor\\.js', 'g'), 'vendor.js?v=' + timeStamp))
    .pipe(replace(new RegExp('main\\.css', 'g'), 'main.css?v=' + timeStamp))
    .pipe(gulp.dest(config.revisioning.dest));
});

gulp.task('revisioning-sw', function() {
  let timeStampString = '{'+ new Date().getTime() + '}';
  return gulp.src(config.revisioning.serviceWorker)
    .pipe(replace(new RegExp('RPCR-cache-\{[^\}]*?\}', 'g'), 'RPCR-cache-' + timeStampString))
    .pipe(gulp.dest(config.revisioning.dest));
});

gulp.task('revisioning-index-sw', function() {
  let timeStamp = new Date().getTime();
  return gulp.src(config.revisioning.serviceWorkerIndex)
    .pipe(replace(new RegExp('service-worker\\.js', 'g'), 'service-worker.js?v=' + timeStamp))
    .pipe(gulp.dest(config.revisioning.dest));
});

gulp.task('revisioning-js-sw', function() {
  let timeStamp = new Date().getTime();
  return gulp.src(config.revisioning.serviceWorkerJS)
    .pipe(replace(new RegExp('service-worker\\.js\\?v=', 'g'), 'service-worker.js?v=' + timeStamp))
    .pipe(gulp.dest(config.revisioning.dest + '/js'));
});

gulp.task('revisioning', function(cb) {
  cb = cb || function() {};
  runSequence('revisioning-hash', 'revisioning-sw', 'revisioning-index-sw', 'revisioning-js-sw', cb);
});
