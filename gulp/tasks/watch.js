var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(config.scripts.src, ['copyJS']);
  gulp.watch(config.styles.src, ['copyCSS']);
});
