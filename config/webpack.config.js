let path = require('path');
const { dev, prod } = require('@ionic/app-scripts/config/webpack.config.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

let command = 'serve';
let server = 'fakeServer';
let appType = 'fakeCordova';
let buildDefinitivo = true;
if (process.env.npm_config_argv) {
  let npm_config_argv = JSON.parse(process.env.npm_config_argv);
  if (npm_config_argv.original.indexOf('--prod') != -1 || npm_config_argv.original.indexOf('serve:real') != -1) { server = 'realServer'; }
  if (npm_config_argv.original.indexOf('build:prod') != -1 ||
      npm_config_argv.original.indexOf('build:pds') != -1 || 
      npm_config_argv.original.indexOf('ionic:run') != -1 || npm_config_argv.original.indexOf('cordova') != -1) { 
    server = 'realServer'; command = 'build'; appType = 'realCordova';
    if (npm_config_argv.original.indexOf('build:pds') != -1) { appType = 'fakeCordova'; }
    if (npm_config_argv.original.indexOf('ionic:run') != -1) {  buildDefinitivo = false; }
  }
}
console.log('-> Comando:', command);
console.log('-> Server:', server);
console.log('-> AppType:', appType);

const aliasConfig = {
  resolve: {
    alias: {
      '@app': path.resolve('src/app'),
      "@core": path.resolve('src/core'),
      "@components": path.resolve('src/components'),
      "@shared": path.resolve('src/shared'),
      '@pages': path.resolve('src/pages'),
      '@providers': path.resolve('src/providers'),
      "@env": path.resolve('src/environments'),
      '@environment': path.resolve('src/environments/environment.cordova.build.ts')
    }
  }
};

if (appType == 'fakeCordova') {
  if (server == 'fakeServer') {
    aliasConfig.resolve.alias["@environment"] = path.resolve('src/environments/environment.cordova.dev.fake.ts');
  }
  else {
    //PDS y Local RealServer
    aliasConfig.resolve.alias["@environment"] = path.resolve('src/environments/environment.cordova.dev.real.ts');
  }
}
else if (!buildDefinitivo) {
  aliasConfig.resolve.alias["@environment"] = path.resolve('src/environments/environment.cordova.test.ts');
}


module.exports = {
  dev: webpackMerge(dev, aliasConfig),
  prod: webpackMerge(prod, aliasConfig)
};
