import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
//import { Config } from 'ionic-angular';

import { Globalization } from '@ionic-native/globalization';
import { Logger } from '../logger/logger.service';
import * as eu from './translations/eu.json';
//import { FCMProvider } from '@shared/providers/fcm.provider';

const log = new Logger('I18nService');
const languageKey = 'language';

/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
export function extract(s: string) {
  return s;
}

@Injectable()
export class I18nService {

  supportedLanguages: string[];
  private defaultLanguage: string;
  private supportedLanguagesLiterales: Object;

  constructor(
    private translateService: TranslateService,
    private globalization: Globalization,
    //private fcmProvider: FCMProvider
    //private config: Config
  ) {
    this.repairEmptyTranslations(eu);
    this.translateService.setTranslation('eu', eu);
  }

  init() {
    this.defaultLanguage = 'es';
    this.supportedLanguages = ['es', 'eu'];
    this.supportedLanguagesLiterales = {
      'es': 'Castellano',
      'eu': 'Euskera'
    };
    let langSaved = localStorage.getItem(languageKey);
    if (langSaved == 'eu') this.setLanguage('eu');
    else {
      this.globalization.getPreferredLanguage()
        .then(languageDevice => {
          this.setLanguage(languageDevice.value.substring(0, 2));
        })
        .catch(() => {
          this.setLanguage('es');
        });
    }
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }

  setLanguage(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = this.supportedLanguages.indexOf(language) != -1;
    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }
    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = 'es';
    }
    log.debug(`Language set to ${language}`);
    //this.configTopicsNotifications(language);
    this.translateService.use(language);
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }

  getLanguageLiteral(language: string) {
    return this.supportedLanguagesLiterales[language];
  }

  getLanguageLiterals() {
    let literals: string[] = [];
    for (let lang in this.supportedLanguagesLiterales) {
      literals.push(this.supportedLanguagesLiterales[lang]);
    }
    return literals;
  }

  getCurrentLanguageLiteral(): string {
    return this.supportedLanguagesLiterales[this.translateService.currentLang];
  }

  addTranslations(language: string, translations: Object) {
    this.translateService.setTranslation(language, translations, true);
  }

  addTranslationsByLangKey(textoObj) {
    for (let prefix in textoObj) {
      let translations = {};
      if (this.supportedLanguages.indexOf(prefix) != -1) {
        translations[textoObj[this.defaultLanguage]] = textoObj[prefix];
        this.translateService.setTranslation(prefix, translations, true);
      }
    }
  }

  instant(key: string): string {
    if (key == '' || key == undefined) return key;
    return this.translateService.instant(key);
  }

  get(key: string): Observable<string> {
    return this.translateService.get(key);
  }

  getInstantKey(key: string) {
    return eu[key];
  }

  translateStatusError(mensaje: string): string {
    // Algunos mensajes vienen con un texto extra variable
    let posicionExtra: number = mensaje.indexOf('<br');
    if (posicionExtra > 0) {
      let mensajeES: string = mensaje.substring(0, posicionExtra); // ojo!, no incluye el caracter en posicionExtra
      let mensajeExtra: string = mensaje.substring(posicionExtra);
      return this.instant(mensajeES) + mensajeExtra;
    } else {
      return this.instant(mensaje);
    }
  }

  private repairEmptyTranslations(eu: Object) {
    for (let key in eu) {
      if (!eu[key]) eu[key] = key;
    }
  }


}
