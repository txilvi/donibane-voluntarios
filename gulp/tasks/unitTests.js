var config = require('../config');
var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

gulp.task('unitTests', function() {
  gulp.src([config.unitTests.src])
    .pipe(protractor({
      configFile: config.unitTests.configFile
    }))
    .on('error', function(e) {
      throw e
    })
    .on('end', function(e) {
      process.exit();
    })
});
