const { task, parallel } = require('gulp');
const jsonServer = require('./jsonServer');


task('ionic:watch:before', parallel(jsonServer.jsonServer));

