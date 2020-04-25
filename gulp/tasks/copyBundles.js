var config = require('../config');
var gulp = require('gulp');

gulp.task('copyJS', ['cleanJS'], function() {
  return gulp.src(config.scripts.src)
    .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('copyCSS', ['cleanCSS'], function() {
  return gulp.src(config.styles.src)
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('copyBundles', ['clean'], function() {
  return gulp.src(config.build.src)
    .pipe(gulp.dest(config.build.dest));
});
