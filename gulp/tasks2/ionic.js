const { task } = require('gulp');
const replace = require('gulp-replace');


function fixPackageJson() {
  return gulp.src('package.json')
    .pipe(replace(new RegExp('(cordova-plugin-[^\\:]*\\:\\s\\")(\\^|\\~)(\\d{1,3}\\.)', 'g'), '$1$3'))
    .pipe(gulp.dest('./'));
};

task('ionic:after', fixPackageJson);
