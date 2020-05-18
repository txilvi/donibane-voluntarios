var config = require('../config');
const { task, watch, series, parallel } = require('gulp');
var enableDestroy = require('server-destroy');
var jsonServer = require('json-server');

let serverDemon = null;

function killJson(done) {
  if (serverDemon) {
    serverDemon.destroy();
  }
  done();
};

function serverStart(done) {
  let server = jsonServer.create();
  let router = jsonServer.router(config.jsonServer.router);
  let logger = false;
  let middlewares = jsonServer.defaults({
    logger: logger
  });
  server.use(middlewares);
  server.use('/api', function(req, res, next) {
    if (result = req.url.match(/mockStatus(\d{3})/)) {
      res.sendStatus(result[1]);
    } else {
      setTimeout(next, config.jsonServer.delay);
    }
  });
  server.use('/api', router);
  serverDemon = server.listen(config.jsonServer.port);
  enableDestroy(serverDemon);

  return done();
};

function watchJson(done) {
  watch(config.jsonServer.router, series(killJson, serverStart));
  done();
}


var jsonServer = series(killJson, parallel(serverStart, watchJson));
task("jsonServer", jsonServer)

module.exports = { jsonServer };