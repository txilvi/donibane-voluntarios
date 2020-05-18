var config = require('../config');
var gulp = require('gulp');
var del = require('del');

gulp.task('cleanCSS', function() {
	return del(config.build.dest + '/*.css', { force: true	});
});

gulp.task('cleanJS', function() {
  return del(config.build.dest + '/*.js', { force: true	});
});

gulp.task('clean', function() {
  var filesToDelete = [config.build.dest + '/*.js', config.build.dest + '/*.css'];
	return del(filesToDelete, { force: true	});
});
