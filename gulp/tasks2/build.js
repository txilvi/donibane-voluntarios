const { task, series } = require('gulp');
const copyBundles = require('./copyBundles');
const revisioning = require('./revisioning');
const watch = require('./watch');

//task('build:after', series(copyBundles.copyBundles, revisioning.revisioningAll));

task('prod', series(copyBundles.copyBundles, revisioning.revisioningAll, watch.watchFiles));

