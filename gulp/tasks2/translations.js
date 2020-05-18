var config = require('../config');
const { task, src, dest } = require('gulp');
var fs = require('fs');
var beautify = require('gulp-beautify');
var converter = require('json-2-csv');

task('orderTranslations', function(done) {

  let file = config.translations.srcJson;
  let folder = config.translations.src;
  let palabras = JSON.parse(fs.readFileSync(file));

  let sortPalabras = {};
  let sortPalabrasVacias = {};
  for (var key in palabras) {
    if (palabras.hasOwnProperty(key)) {
      if (palabras[key] == "") {
        sortPalabrasVacias[key] = "";
      } else {
        sortPalabras[key] = palabras[key];
      }
    }
  }

  let nuevasPalabras = Object.assign(sortPalabras, sortPalabrasVacias);
  fs.writeFile(file, JSON.stringify(nuevasPalabras), 'utf8', function(err) {
    if (err) throw err;
    src(file).pipe(beautify({indent_size: 4})).pipe(dest(folder))
  });

  done();
});


task('addManualTranslations', function(done) {
  let fileManual = config.translations.srcManual;
  let fileEu = config.translations.srcJson;
  let folder = config.translations.src;

  let traducManuales = JSON.parse(fs.readFileSync(fileManual));
  let traducExtract = JSON.parse(fs.readFileSync(fileEu));

  let todasTraduc = Object.assign(traducExtract, traducManuales);
  fs.writeFile(fileEu, JSON.stringify(todasTraduc), 'utf8', function(err) {
    if (err) throw err;
    src(fileEu).pipe(beautify({indent_size: 4})).pipe(dest(folder))
  });
  done();
});

/* Exporta las nuevas traducciones a un csv */

task('exportPendingTranslations', function(done) {

	let file = config.translations.srcJson;
	let folder = config.translations.src;
	let palabras = JSON.parse(fs.readFileSync(file));
	let dest = config.translations.dest;
	let destCsv = config.translations.destCsv;

	let palabrasVacias = [];
	for (var key in palabras) {
		if (palabras.hasOwnProperty(key)) {
			if (palabras[key] == "") {
				let palabra = {
					Castellano: key,
					Euskera: ''
				}
				palabrasVacias.push(palabra);
			}
		}
	}

	var options = {
    delimiter : {
        wrap  : '"', // Double Quote (") character
        field : ';', // Comma field delimiter
        array : '-', // Semicolon array value delimiter
        eol   : '\n' // Newline delimiter
    },
    prependHeader    : true,
    sortHeader       : false,
    trimHeaderValues : true,
    trimFieldValues  : true,
    keys             : ['Castellano', 'Euskera']
	};


	var json2csvCallback = function (err, csv) {
    if (err) throw err;
    fs.writeFile(destCsv, csv, 'utf8', function(err) {
			if (err) throw err;
		});
	};

    converter.json2csv(palabrasVacias, json2csvCallback, options);
    
    done();

});