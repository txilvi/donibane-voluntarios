var config = require('../config');
var gulp = require('gulp');
var replace = require('gulp-replace');


gulp.task('adaptIndex', function() {
    return gulp.src(config.revisioning.replace)
    .pipe(replace(/(<meta\sname=\"viewport\"\scontent=\"[^\"]*)maximum-scale=1\.0,\suser-scalable=no\">/g, '$1maximum-scale=5.0, user-scalable=yes">'))
    .pipe(gulp.dest(config.revisioning.dest));
});

gulp.task('removeCordova', function() {
    return gulp.src(config.revisioning.replace)
    .pipe(replace(new RegExp('<script type=\"text\/javascript\" src=\"cordova\.js"><\/script>'), ''))
    .pipe(gulp.dest(config.revisioning.dest));
});