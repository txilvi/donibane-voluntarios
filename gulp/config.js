global.buildDir = '';

module.exports = {
  jsonServer: {
    port: 5000,
    router: 'gulp/json-server/db.json',
    delay: 1000
  },
  build: {
    src: ['www/**/*', '!www/**/*.map'],
    dest: global.buildDir
  },
  scripts: {
    src: 'www/build/*.js',
    dest: global.buildDir + '/build'
  },
  styles: {
    src: 'www/build/*.css',
    dest: global.buildDir + '/build'
  },
  revisioning: {
    replace: global.buildDir + '/index.html',
    dest: global.buildDir,
    serviceWorker: global.buildDir + '/service-worker.js',
    serviceWorkerIndex: global.buildDir + '/index.html',
    serviceWorkerJS: global.buildDir + '/js/main.js'
  },
  unitTests: {
    src: 'tests/unit/**/*-spec.ts',
    configFile: 'protractor.conf.js'
  },
  translations: {
    src: './src/core/i18n/translations',
    srcJson: './src/core/i18n/translations/eu.json',
    dest: './src/core/i18n/translations/csv',
    destCsv: './src/core/i18n/translations/csv/eu.csv',
    srcManual: './src/core/i18n/translations/manual.json'
  },
  cordovaZip: {
    srcApp: 'www/**/*',
    srcConf: ['resources/**/*', 'config.xml'],
    dest: './',
    tmpFolder: 'build.zip'
  },
  reparirCRLF: {
    src_cs: '../**/*.cs',
    src_all: '../**/*'
  }
}


