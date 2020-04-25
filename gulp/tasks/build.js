var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:after', function(cb) {
    cb = cb || function() {};
    runSequence('copyBundles', 'revisioning', cb);
});


gulp.task('prod', function(cb) {
  cb = cb || function() {};
  runSequence('copyBundles', 'revisioning', 'watch', cb);
});
