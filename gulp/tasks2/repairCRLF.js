const config = require('../config');
const { task, src, dest } = require('gulp');
const lec = require('gulp-line-ending-corrector');


task('repairCRLF_CS', function() {
  return src(config.reparirCRLF.src_cs, {
      base: './'
    })
    .pipe(lec({
      verbose: true,
      eolc: 'CRLF',
      encoding: 'utf8'
    }))
    .pipe(dest('./'));
});


/*gulp.task('repairCRLF_ALL', function(cb) {
  gulp.src(config.reparirCRLF.src_all, {
      base: './'
    })
    .pipe(isBinary())
    .pipe(through.obj(function(file, enc, next) {
      if (file.isBinary()) {
        next();
        return;
      }
      next(null, file);
    }))
    .pipe(lec({ verbose:true, eolc: 'CRLF', encoding:'utf8' }))
    .pipe(gulp.dest('./'));
});*/