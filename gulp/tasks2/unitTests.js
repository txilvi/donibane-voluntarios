const config = require('../config');
const protractor = require("gulp-protractor").protractor;
const { task, src } = require('gulp');


task('unitTests', function() {
  return src([config.unitTests.src])
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
