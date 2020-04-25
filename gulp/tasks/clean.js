var config = require('../config');
var gulp = require('gulp');
var del = require('del');

gulp.task('cleanCSS', function() {
	return del(config.build.dest + '/css', { force: true	});
});

gulp.task('cleanJS', function() {
  return del(config.build.dest + '/js', { force: true	});
});

gulp.task('clean', function() {
  var foldersToDelete = [config.build.dest + '/js', config.build.dest + '/css'];
	return del(foldersToDelete, { force: true	});
});
