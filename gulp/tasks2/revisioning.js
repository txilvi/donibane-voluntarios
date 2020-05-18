const config = require('../config');
const replace = require('gulp-replace');
const { src, dest, series } = require('gulp');

function removeScriptIonic() {
  return src(config.revisioning.replace)
    .pipe(replace(new RegExp('<script data-ionic[\\s\\S]*?>[\\s\\S]*?<\\/script>', 'g'), ''))
    .pipe(dest(config.revisioning.dest));
};

function revisioningHash() {
  let timeStamp = new Date().getTime();
  return src(config.revisioning.replace)
    .pipe(replace(new RegExp('main\\.js', 'g'), 'main.js?v=' + timeStamp))
    .pipe(replace(new RegExp('vendor\\.js', 'g'), 'vendor.js?v=' + timeStamp))
    .pipe(replace(new RegExp('main\\.css', 'g'), 'main.css?v=' + timeStamp))
    .pipe(dest(config.revisioning.dest));
};

function revisioningSw() {
  let timeStampString = '{' + new Date().getTime() + '}';
  return src(config.revisioning.serviceWorker)
    .pipe(replace(new RegExp('RPCR-cache-\{[^\}]*?\}', 'g'), 'RPCR-cache-' + timeStampString))
    .pipe(dest(config.revisioning.dest));
};

function revisioningIndexSw() {
  let timeStamp = new Date().getTime();
  return src(config.revisioning.serviceWorkerIndex)
    .pipe(replace(new RegExp('service-worker\\.js', 'g'), 'service-worker.js?v=' + timeStamp))
    .pipe(dest(config.revisioning.dest));
};

function revisioningJsSw() {
  let timeStamp = new Date().getTime();
  return src(config.revisioning.serviceWorkerJS)
    .pipe(replace(new RegExp('service-worker\\.js\\?v=', 'g'), 'service-worker.js?v=' + timeStamp))
    .pipe(dest(config.revisioning.dest + '/js'));
};


var revisioningAll = series(revisioningHash, revisioningSw, revisioningIndexSw, revisioningJsSw, removeScriptIonic);

module.exports = { revisioningAll };