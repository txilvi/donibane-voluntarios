var config = require('../config');
var gulp = require('gulp');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');


gulp.task('fixPackageJson', function() {
  return gulp.src('package.json')
    .pipe(replace(new RegExp('(cordova-plugin-[^\\:]*\\:\\s\\")(\\^|\\~)(\\d{1,3}\\.)', 'g'), '$1$3'))
    .pipe(gulp.dest('./'));
});

gulp.task('ionic:after', function(cb) {
  cb = cb || function() {};
  runSequence('fixPackageJson', cb);
});
