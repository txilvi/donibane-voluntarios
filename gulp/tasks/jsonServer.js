let config = require('../config');
let gulp = require('gulp');
let enableDestroy = require('server-destroy');
let jsonServer = require('json-server');

let serverDemon = null;

gulp.task('serverStart', ['killJson'], () => {
  let server = jsonServer.create();
  let router = jsonServer.router(config.jsonServer.router);
  let logger = false;
  let middlewares = jsonServer.defaults({logger: logger});
  server.use(middlewares);
  server.use('/api', function(req, res, next) {
    if (result = req.url.match(/MockStatus(\d{3})/)) {
      res.sendStatus(result[1]);
    }
    else if (result = req.url.match(/^(.*)Delay(\d{3,5})$/)) {
      req.url = result[1];
      setTimeout(next, result[2]);
    }
    else {
      setTimeout(next, config.jsonServer.delay);
    }
  });
  server.use('/api', router);
  serverDemon = server.listen(config.jsonServer.port);
  enableDestroy(serverDemon);
});

gulp.task('killJson', () => {
  if (serverDemon) {
    serverDemon.destroy();
  }
})

gulp.task('watchJson', () => {
  gulp.watch([config.jsonServer.router], ['serverStart']);
});

gulp.task('jsonServer', ['serverStart', 'watchJson']);
