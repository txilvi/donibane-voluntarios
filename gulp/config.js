global.buildDir = '';

module.exports = {
  jsonServer: {
    port: 4000,
    router: 'gulp/json-server/db.json',
    delay: 1000
  },
  build: {
    //src: 'www/**/!(*.map)',
    src: 'www/**/*',
    dest: global.buildDir
  },
  scripts: {
    //src: 'www/js/*.js',
    src: 'www/js/*',
    dest: global.buildDir + '/js'
  },
  styles: {
    src: 'www/css/*',
    dest: global.buildDir + '/css'
  },
  revisioning: {
    replace: global.buildDir + '/index.html',
    dest: global.buildDir,
    serviceWorker: global.buildDir + '/service-worker.js',
    serviceWorkerIndex: global.buildDir + '/index.html',
    serviceWorkerJS: global.buildDir + '/js/main.js'
  },
  translations: {
    src: './src/core/i18n/translations',
    srcJson: './src/core/i18n/translations/eu.json',
    dest: './src/core/i18n/translations/csv',
    destCsv: './src/core/i18n/translations/csv/eu.csv',
    srcManual: './src/core/i18n/translations/manual.json'
  }
}


