const config = require('../config');
const del = require('del');

function cleanCSS() {
  return del(config.build.dest + '/*.css', {
    force: true
  });
};

function cleanJS() {
  return del(config.build.dest + '/*.js', {
    force: true
  });
};

function clean() {
  var filesToDelete = [config.build.dest + '/*.js', config.build.dest + '/*.css'];
  return del(filesToDelete, {
    force: true
  });
};

module.exports = { clean, cleanCSS, cleanJS };

