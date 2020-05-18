webpackJsonp([1],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param {!string} url The request URL.
     * @param {any} params Optional request query parameters.
     * @param {ResponseOptions} data The received data.
     * @param {Date=} lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, params, data, lastUpdated) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        //log.debug('Cache set for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?ResponseOptions} The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        var cacheEntry = this.cachedData[cacheKey];
        if (cacheEntry) {
            //log.debug('Cache hit for key: "' + cacheKey + '"');
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?HttpCacheEntry} The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url, params) {
        return this.cachedData[this.getCacheKey(url, params)] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     */
    HttpCacheService.prototype.clearCache = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = null;
        //log.debug('Cache cleared for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        if (expirationDate) {
            for (var key in this.cachedData) {
                var value = this.cachedData[key];
                if (expirationDate >= value.lastUpdated) {
                    delete this.cachedData[key];
                }
            }
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either local or session
     *   storage, or if no value is provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    HttpCacheService.prototype.getCacheKey = function (url, params) {
        return url + (params ? JSON.stringify(params) : '');
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? data : {};
    };
    HttpCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());

//# sourceMappingURL=http-cache-service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ayuda/ayuda.module": [
		224
	],
	"../pages/contacto/contacto.module": [
		259
	],
	"../pages/galeria/galeria.module": [
		260
	],
	"../pages/home/home.module": [
		262
	],
	"../pages/que-hacemos/que-hacemos.module": [
		264
	],
	"../pages/voluntarios/voluntarios.module": [
		266
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaModule", function() { return AyudaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ayuda__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AyudaModule = /** @class */ (function () {
    function AyudaModule() {
    }
    AyudaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__ayuda__["a" /* AyudaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__ayuda__["a" /* AyudaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__["a" /* ImageGalleryComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], AyudaModule);
    return AyudaModule;
}());

//# sourceMappingURL=ayuda.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_model__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.globalData = new __WEBPACK_IMPORTED_MODULE_2__global_model__["a" /* GlobalData */]();
        this.globalDataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.globalData$ = this.globalDataSubject.asObservable();
    }
    GlobalService.prototype.deleteGlobalData = function () {
        this.globalData = new __WEBPACK_IMPORTED_MODULE_2__global_model__["a" /* GlobalData */]();
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return eTipoImagen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Imagen; });
var eTipoImagen;
(function (eTipoImagen) {
    eTipoImagen["Normalizada"] = "1";
    eTipoImagen["Thumbnail"] = "2";
})(eTipoImagen || (eTipoImagen = {}));
var Imagen = /** @class */ (function () {
    function Imagen() {
    }
    return Imagen;
}());

//# sourceMappingURL=image-gallery.model.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AyudaPage = /** @class */ (function () {
    function AyudaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    AyudaPage.prototype.ngOnInit = function () {
    };
    AyudaPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    AyudaPage.prototype.goPage = function (page) {
        this.navCtrl.push(page, {
            'esFormularioAyuda': true
        }, { animate: false });
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ayuda-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\ayuda\ayuda.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n                <span translate>Necesito ayuda</span>\n\n            </div>\n\n        </div>\n\n\n\n        <span translate>\n\n            Podemos ayudarte a ti o a tus familiares con\n\n        </span>\n\n        <ul>\n\n            <li translate>\n\n                Hacer la compra\n\n            </li>\n\n            <li translate>\n\n                Recoger medicación\n\n            </li>\n\n            <li translate>\n\n                Cuidar a los peques\n\n            </li>\n\n            <li translate>\n\n                Otras necesidades...\n\n            </li>\n\n        </ul>\n\n\n\n        <div class="btn-contacta-wrapper">\n\n            <button type="button" ion-button class="c-btn btn-contacta" (click)="goPage(\'ContactoPage\')">\n\n                <ion-icon name="contacts" class="md-contacts"></ion-icon>\n\n                <span translate>Contacta con nosotros</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\ayuda\ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoModule", function() { return ContactoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacto__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactoModule = /** @class */ (function () {
    function ContactoModule() {
    }
    ContactoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__contacto__["a" /* ContactoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__contacto__["a" /* ContactoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__["a" /* ImageGalleryComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], ContactoModule);
    return ContactoModule;
}());

//# sourceMappingURL=contacto.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaModule", function() { return GaleriaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__galeria__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GaleriaModule = /** @class */ (function () {
    function GaleriaModule() {
    }
    GaleriaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__galeria__["a" /* GaleriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__galeria__["a" /* GaleriaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__["a" /* ImageGalleryComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], GaleriaModule);
    return GaleriaModule;
}());

//# sourceMappingURL=galeria.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GaleriaPage = /** @class */ (function () {
    function GaleriaPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.imagenes = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    GaleriaPage.prototype.ngOnInit = function () {
        this.loadInformacion();
    };
    GaleriaPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    GaleriaPage.prototype.loadInformacion = function () {
        this.imagenes = [];
        for (var i = 1; i <= 9; i++) {
            var imagen = new __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["a" /* Imagen */]();
            imagen.id = i;
            imagen.tipo = __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["b" /* eTipoImagen */].Normalizada;
            imagen.ruta = 'assets/imgs/actividad/actividad' + i + '.jpg';
            var imagenThumbnail = new __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["a" /* Imagen */]();
            imagenThumbnail.id = i;
            imagenThumbnail.tipo = __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["b" /* eTipoImagen */].Thumbnail;
            imagenThumbnail.ruta = 'assets/imgs/actividad/actividad' + i + '.jpg';
            this.imagenes.push(imagen);
            this.imagenes.push(imagenThumbnail);
        }
    };
    GaleriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'galeria-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\galeria\galeria.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/galeria.png" />\n\n                <span translate>Imágenes</span>\n\n            </div>\n\n        </div>\n\n        <div *ngIf="imagenes" class="gallery">\n\n            <image-gallery [images]="imagenes"></image-gallery>\n\n            <div [hidden]="imagenes" class="no-imagenes">...</div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\galeria\galeria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], GaleriaPage);
    return GaleriaPage;
}());

//# sourceMappingURL=galeria.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    HomePage.prototype.goPage = function (page, options) {
        this.navCtrl.push(page, options, { animate: false });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\home\home.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div translate class="custom-container descripcion">\n\n        <span translate>\n\n            Desde el\n\n        </span>\n\n        <span class="destacado" translate>\n\n            Pacto por la Persona Mayor\n\n        </span>\n\n        <span translate>\n\n            y\n\n        </span>\n\n        <span class="destacado" translate>\n\n            Maratxa\n\n        </span>\n\n        <span translate>\n\n            estamos creando una red de\n\n        </span>\n\n        <span class="destacado" translate>\n\n            voluntari@s\n\n        </span>\n\n        <span translate>\n\n            para ayudar a las personas que lo necesitéis.\n\n        </span>\n\n        <div class="lnk-wrapper">\n\n            <a class="lnk-haciendo" (click)="goPage(\'QueHacemosPage\')">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/ayuda.png" />\n\n                <span translate>¿Qué estamos haciendo?</span>\n\n            </a>\n\n        </div>\n\n    </div>\n\n    <div class="usuario">\n\n        <div class="img-usuario-wrapper">\n\n            <img class="img-ayuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n        </div>\n\n        <div class="btn-usuario-wrapper">\n\n            <button type="button" ion-button class="c-btn btn-usuario" (click)="goPage(\'AyudaPage\')">\n\n                <span translate>Necesito ayuda</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n    <div class="usuario">\n\n        <div class="img-usuario-wrapper">\n\n            <img alt="icono-voluntaria" src="assets/imgs/usuarios/voluntarios.png" />\n\n        </div>\n\n        <div class="btn-usuario-wrapper">\n\n            <button type="button" ion-button class="c-btn btn-usuario" (click)="goPage(\'VoluntariosPage\')">\n\n                <span translate>Quiero ser voluntari@</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueHacemosModule", function() { return QueHacemosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__que_hacemos__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QueHacemosModule = /** @class */ (function () {
    function QueHacemosModule() {
    }
    QueHacemosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__que_hacemos__["a" /* QueHacemosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__que_hacemos__["a" /* QueHacemosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], QueHacemosModule);
    return QueHacemosModule;
}());

//# sourceMappingURL=que-hacemos.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueHacemosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueHacemosPage = /** @class */ (function () {
    function QueHacemosPage(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.imagenes = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    QueHacemosPage.prototype.ngOnInit = function () {
    };
    QueHacemosPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    QueHacemosPage.prototype.goPage = function (page) {
        this.navCtrl.push(page, {
            'esFormularioAyuda': false
        }, { animate: false });
    };
    QueHacemosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'que-hacemos-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\que-hacemos\que-hacemos.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion scoll-content">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/ayuda.png" />\n\n                <span translate>¿Qué estamos haciendo?</span>\n\n            </div>\n\n        </div>\n\n        <p>\n\n            <span translate>\n\n                Desde el\n\n            </span>\n\n            <span class="destacado" translate>\n\n                Pacto por la Persona Mayor\n\n            </span>\n\n            <span translate>\n\n                y\n\n            </span>\n\n            <span class="destacado" translate>\n\n                Maratxa\n\n            </span>\n\n            <span translate>\n\n                queremos trasladar un mensaje de tranquilidad, responsabilidad y solidaridad.\n\n            </span>\n\n        </p>\n\n        <p>\n\n            <span translate>\n\n                Es un momento difícil, pero el COVID-19 puede sacar lo mejor de las personas y lo más auténtico de un barrio: </span>\n\n            <span class="destacado" translate>\n\n                solidaridad, participación y la implicación en construir entre tod@s un San Juan mejor.\n\n            </span>\n\n        </p>\n\n        <p>\n\n            <span translate>\n\n                Es por eso, que\n\n            </span>\n\n            <span class="destacado" translate>\n\n                estamos creando una red de voluntari@s\n\n            </span>\n\n            <span translate>\n\n                para ayudar a las personas que así lo necesitéis. Porque lo primero, son las personas.\n\n            </span>\n\n        </p>\n\n\n\n        <div class="cuenta-usuarios">\n\n            <div class="usuario">\n\n                <div class="img-usuario-wrapper">\n\n                    <img class="img-ayuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n                </div>\n\n                <div class="numero">\n\n                    <div class="destacado" translate>Más de 100</div>\n\n                    <div class="destacado" translate>personas atendidas</div>\n\n                </div>\n\n            </div>\n\n            <div class="usuario">\n\n                <div class="img-usuario-wrapper">\n\n                    <img alt="icono-voluntaria" src="assets/imgs/usuarios/voluntarios.png" />\n\n                </div>\n\n                <div class="numero">\n\n                    <div class="destacado" translate>88</div>\n\n                    <div class="destacado" translate>voluntari@s</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="lnk-gallery">\n\n            <a class="lnk-haciendo" (click)="goPage(\'GaleriaPage\')">\n\n                <img alt="icono-galeria" src="assets/imgs/icons/galeria.png" />\n\n                <span translate>Ver imágenes</span>\n\n            </a>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\que-hacemos\que-hacemos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], QueHacemosPage);
    return QueHacemosPage;
}());

//# sourceMappingURL=que-hacemos.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntariosModule", function() { return VoluntariosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voluntarios__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VoluntariosModule = /** @class */ (function () {
    function VoluntariosModule() {
    }
    VoluntariosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__voluntarios__["a" /* VoluntariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__voluntarios__["a" /* VoluntariosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__["a" /* ImageGalleryComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], VoluntariosModule);
    return VoluntariosModule;
}());

//# sourceMappingURL=voluntarios.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoluntariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoluntariosPage = /** @class */ (function () {
    function VoluntariosPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    VoluntariosPage.prototype.ngOnInit = function () {
    };
    VoluntariosPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    VoluntariosPage.prototype.goPage = function (page) {
        this.navCtrl.push(page, {
            'esFormularioAyuda': false
        }, { animate: false });
    };
    VoluntariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voluntarios-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\voluntarios\voluntarios.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-voluntario" src="assets/imgs/usuarios/voluntarios.png" />\n\n                <span translate>Quiero ser voluntario</span>\n\n            </div>\n\n        </div>\n\n\n\n        <p translate>\n\n            Sólo hace falta que tengas ganas y un poco de tu tiempo\n\n        </p>\n\n        <p translate>\n\n            Puedes ayudar si cumples los siguientes requisitos\n\n        </p>\n\n        <ul>\n\n            <li translate>\n\n                No haber tenido síntomas de COVID-19\n\n            </li>\n\n            <li translate>\n\n                En los últimos días no haber estado en espacios de riesgo\n\n            </li>\n\n        </ul>\n\n\n\n        <div class="btn-contacta-wrapper">\n\n            <button type="button" ion-button class="c-btn btn-contacta" (click)="goPage(\'ContactoPage\')">\n\n                <ion-icon name="contacts" class="md-contacts"></ion-icon>\n\n                <span translate>Contacta con nosotros</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\voluntarios\voluntarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], VoluntariosPage);
    return VoluntariosPage;
}());

//# sourceMappingURL=voluntarios.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CordovaProvider = /** @class */ (function () {
    function CordovaProvider(statusBar, splashScreen) {
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
    }
    CordovaProvider.prototype.init = function () {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    };
    CordovaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], CordovaProvider);
    return CordovaProvider;
}());

//# sourceMappingURL=cordova.provider.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorNotifierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_logging_service__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorNotifierService = /** @class */ (function () {
    function ErrorNotifierService(injector) {
        this.injector = injector;
        this.errorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ErrorNotifierService.prototype.notifyError = function (error) {
        var loggingService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__logging_logging_service__["a" /* LoggingProvider */]);
        loggingService.logHttpError(error);
        this.errorSubject.next(error);
    };
    ErrorNotifierService.prototype.onError = function (callback) {
        this.errorSubject.subscribe(callback);
    };
    ErrorNotifierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ErrorNotifierService);
    return ErrorNotifierService;
}());

//# sourceMappingURL=http-auth-error.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpSchemaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ajv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpSchemaService = /** @class */ (function () {
    function HttpSchemaService() {
        this.ajv = new __WEBPACK_IMPORTED_MODULE_1_ajv__(); // options can be passed, e.g. {allErrors: true}
    }
    HttpSchemaService.prototype.validate = function (schema, data) {
        var valid = this.ajv.validate(schema, data);
        if (!valid)
            return this.ajv.errorsText();
        return '';
    };
    HttpSchemaService.prototype.addSchema = function (name, schema) {
        this.ajv.addSchema(schema, name);
    };
    HttpSchemaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpSchemaService);
    return HttpSchemaService;
}());

//# sourceMappingURL=http-schema-service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMissingTranslationHandler; });
var MyMissingTranslationHandler = /** @class */ (function () {
    function MyMissingTranslationHandler() {
    }
    MyMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return MyMissingTranslationHandler;
}());

//# sourceMappingURL=i18n.missing.handler.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Localizacion; });
/* unused harmony export Marcador */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SugerenciaDireccion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direccion; });
var Localizacion = /** @class */ (function () {
    function Localizacion(latitud, longitud) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
    return Localizacion;
}());

var Marcador = /** @class */ (function () {
    function Marcador(latitud, longitud, icon, contenido) {
        this.latitud = latitud;
        this.longitud = longitud;
        this.icon = icon;
        this.contenido = contenido;
    }
    return Marcador;
}());

var SugerenciaDireccion = /** @class */ (function () {
    function SugerenciaDireccion(id, nombreCompleto, lugarPrincipal, lugarSecundario) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.lugarPrincipal = lugarPrincipal;
        this.lugarSecundario = lugarSecundario;
    }
    return SugerenciaDireccion;
}());

var Direccion = /** @class */ (function () {
    function Direccion(calle, localidad) {
        this.calle = calle;
        this.localidad = localidad;
    }
    return Direccion;
}());

//# sourceMappingURL=geolocalizacion.model.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_cache__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_locales_es__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_locales_eu__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_core_module__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_i18n_i18n_missing_handler__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_geolocalizacion_geolocalizacion_provider_module__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_cordova_cordova_provider_module__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_errores_errores_provider_module__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_correos_correos_provider_module__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_que_hacemos_que_hacemos_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_voluntarios_voluntarios_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_ayuda_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_contacto_contacto_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_galeria_galeria_module__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//Providers





//Pages






Object(__WEBPACK_IMPORTED_MODULE_14__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_8__angular_common_locales_es__["a" /* default */]);
Object(__WEBPACK_IMPORTED_MODULE_14__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_9__angular_common_locales_eu__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* SanJuanXarApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    missingTranslationHandler: { provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12__core_i18n_i18n_missing_handler__["a" /* MyMissingTranslationHandler */] },
                    useDefaultLang: false
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* SanJuanXarApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacto/contacto.module#ContactoModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeria/galeria.module#GaleriaModule', name: 'GaleriaPage', segment: 'galeria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/que-hacemos/que-hacemos.module#QueHacemosModule', name: 'QueHacemosPage', segment: 'que-hacemos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/voluntarios/voluntarios.module#VoluntariosModule', name: 'VoluntariosPage', segment: 'voluntarios', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ionic_cache__["a" /* CacheModule */].forRoot({ keyPrefix: 'maestras' }),
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_que_hacemos_que_hacemos_module__["QueHacemosModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_ayuda_module__["AyudaModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_voluntarios_voluntarios_module__["VoluntariosModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_contacto_contacto_module__["ContactoModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_galeria_galeria_module__["GaleriaModule"],
                __WEBPACK_IMPORTED_MODULE_18__providers_correos_correos_provider_module__["a" /* CorreosProviderModule */],
                __WEBPACK_IMPORTED_MODULE_15__providers_geolocalizacion_geolocalizacion_provider_module__["a" /* GeoLocalizacionProviderModule */],
                __WEBPACK_IMPORTED_MODULE_17__providers_errores_errores_provider_module__["a" /* ErroresProviderModule */],
                __WEBPACK_IMPORTED_MODULE_16__providers_cordova_cordova_provider_module__["a" /* CordovaProviderModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_app_component__["a" /* SanJuanXarApp */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitToDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LimitToDirective = /** @class */ (function () {
    function LimitToDirective() {
    }
    LimitToDirective.prototype._onKeypress = function (e) {
        var limit = +this.limitTo;
        if (e.target.value.length === limit)
            e.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('limit-to'),
        __metadata("design:type", Object)
    ], LimitToDirective.prototype, "limitTo", void 0);
    LimitToDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[limit-to]',
            host: {
                '(keypress)': '_onKeypress($event)',
            }
        })
    ], LimitToDirective);
    return LimitToDirective;
}());

//# sourceMappingURL=limit-to.directive.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PassValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassCheckDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PassValidation = /** @class */ (function () {
    function PassValidation() {
    }
    return PassValidation;
}());

var PassCheckDirective = /** @class */ (function () {
    function PassCheckDirective() {
    }
    PassCheckDirective.prototype._onKeyup = function (e) {
        var pass = e.target.value;
        if (pass != '' && pass != undefined) {
            var validation = new PassValidation();
            validation.pwlength = pass.length >= 8;
            validation.pwnum = this.hasNumber(pass);
            validation.pwlower = this.hasLowerCase(pass);
            validation.pwupper = this.hasUpperCase(pass);
            validation.pwmatch = pass === this.passNueva;
            validation.pwsame = pass != this.passAnterior;
            var errors = {};
            for (var key in validation) {
                var value = validation[key];
                if (value == false)
                    errors[key] = true;
            }
            if (!this.isEmpty(errors))
                this.passCtrl.setErrors(errors);
        }
    };
    PassCheckDirective.prototype.hasLowerCase = function (str) {
        return (/[a-z]/.test(str));
    };
    PassCheckDirective.prototype.hasUpperCase = function (str) {
        return (/[A-Z]/.test(str));
    };
    PassCheckDirective.prototype.hasNumber = function (str) {
        return (/\d/.test(str));
    };
    PassCheckDirective.prototype.isEmpty = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('passNueva'),
        __metadata("design:type", Object)
    ], PassCheckDirective.prototype, "passNueva", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('passAnterior'),
        __metadata("design:type", Object)
    ], PassCheckDirective.prototype, "passAnterior", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('passCtrl'),
        __metadata("design:type", Object)
    ], PassCheckDirective.prototype, "passCtrl", void 0);
    PassCheckDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[pass-check]',
            host: {
                '(keyup)': '_onKeyup($event)',
            }
        })
    ], PassCheckDirective);
    return PassCheckDirective;
}());

//# sourceMappingURL=pass-check.directive.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgRetina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_i18n_service__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgRetina = /** @class */ (function () {
    function NgRetina(el, renderer, http, i18nService, translateService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.http = http;
        this.i18nService = i18nService;
        this.translateService = translateService;
        this.translateService.onLangChange.subscribe(function () {
            _this.ngOnInit();
        });
    }
    NgRetina.prototype.ngOnInit = function () {
        var _this = this;
        if (this.language) {
            this.addLanguagePath();
        }
        if (this._isRetina()) {
            // check for retina image
            this._checkRetinaImage('@2x')
                .then(function () {
                var retinaUrl = _this._getRetinaUrl(_this.imgUrl, '@2x');
                _this.renderer.setAttribute(_this.el.nativeElement, 'src', retinaUrl);
            })
                .catch(function () {
                _this.renderer.setAttribute(_this.el.nativeElement, 'src', _this.imgUrl);
            });
        }
        else {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.imgUrl);
        }
    };
    NgRetina.prototype._checkRetinaImage = function (infix) {
        var retinaUrl = this._getRetinaUrl(this.imgUrl, infix);
        return this.http.get(retinaUrl).toPromise();
    };
    NgRetina.prototype._isRetina = function () {
        var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), ' +
            '(min--moz-device-pixel-ratio: 1.5), ' +
            '(-o-min-device-pixel-ratio: 3/2), ' +
            '(min-resolution: 1.5dppx)';
        if (window.devicePixelRatio > 1) {
            return true;
        }
        return (window.matchMedia && window.matchMedia(mediaQuery).matches);
    };
    NgRetina.prototype._getRetinaUrl = function (url, infix) {
        var pathParts = url.split('/');
        var file = pathParts.pop();
        var fileParts = file.split('.');
        if (fileParts.length < 2)
            return url + infix;
        fileParts[fileParts.length - 2] += infix;
        pathParts.push(fileParts.join('.'));
        return pathParts.join('/');
    };
    NgRetina.prototype.addLanguagePath = function () {
        var sepUrlEs = this.imgUrl.split('_es');
        var sepUrlEu = this.imgUrl.split('_eu');
        var url = this.imgUrl;
        if (sepUrlEs.length > 1) {
            url = sepUrlEs[sepUrlEs.length - 2] + sepUrlEs[sepUrlEs.length - 1];
        }
        else if (sepUrlEu.length > 1) {
            url = sepUrlEu[sepUrlEu.length - 2] + sepUrlEu[sepUrlEu.length - 1];
        }
        var sepUrl = url.split('.');
        if (sepUrl.length > 2) {
            this.imgUrl = '.' + sepUrl[sepUrl.length - 2] + '_' + this.i18nService.getCurrentLanguage() + '.' + sepUrl[sepUrl.length - 1];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ngRetina'),
        __metadata("design:type", String)
    ], NgRetina.prototype, "imgUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NgRetina.prototype, "language", void 0);
    NgRetina = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ngRetina]',
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__core_i18n_i18n_service__["a" /* I18nService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], NgRetina);
    return NgRetina;
}());

//# sourceMappingURL=retina-image.directive.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = {"88":"","Haz barrio":"Donibane eraiki","CUIDA A TUS VECIN@S":"ELKAR ZAINDUZ","Necesito ayuda":"Laguntza behar dut","¿Qué estamos haciendo?":"Zer egiten ari gara?","Quiero ser voluntari@":"Boluntario izan nahi dut","Se ha producido un error al cargar el mapa":"","km desde tu ubicación":"","Cuida a tus vecinos":"","Podemos ayudarte a ti o a tus familiares con":"","Hacer la compra":"","Recoger medicación":"","Cuidar a los peques":"","Otras necesidades...":"","Contacta con nosotros":"","Tu nombre *":"","Por favor, introduce tu nombre":"","Tu teléfono *":"","Tu e-mail (opcional)":"","Introduce un email correcto":"","Cuéntanos que necesitas":"","* Campos obligatorios":"","Enviar":"","Imágenes":"","Desde el":"","Pacto por la Persona Mayor":"","y":"","Maratxa":"","estamos creando una red de":"","voluntari@s":"","para ayudar a las personas que lo necesitéis.":"","queremos trasladar un mensaje de tranquilidad, responsabilidad y solidaridad.":"","Es un momento difícil, pero el COVID-19 puede sacar lo mejor de las personas y lo más auténtico de un barrio:":"","solidaridad, participación y la implicación en construir entre tod@s un San Juan mejor.":"","Es por eso, que":"","estamos creando una red de voluntari@s":"","para ayudar a las personas que así lo necesitéis. Porque lo primero, son las personas.":"","Más de 100":"","personas atendidas":"","Ver imágenes":"","Quiero ser voluntario":"","Sólo hace falta que tengas ganas y un poco de tu tiempo":"","Puedes ayudar si cumples los siguientes requisitos":"","No haber tenido síntomas de COVID-19":"","En los últimos días no haber estado en espacios de riesgo":""}

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedNavDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FixedNavDirective = /** @class */ (function () {
    function FixedNavDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.scrollYNav = 92;
        this.element = this.elementRef.nativeElement;
        this.mainContent = window.document.querySelector('.main-content');
    }
    //private origOffsetY: number;
    FixedNavDirective.prototype.onScroll = function (_$event) {
        this.adjustNav();
    };
    FixedNavDirective.prototype.onTouchMove = function (_$event) {
        this.adjustNav();
    };
    FixedNavDirective.prototype.ngOnDestroy = function () {
        this.removeFixedNav();
    };
    FixedNavDirective.prototype.adjustNav = function () {
        if (!this.mainContent)
            this.mainContent = window.document.querySelector('.main-content');
        if (window.scrollY >= this.scrollYNav) {
            this.renderer.addClass(this.mainContent, 'menu-margin');
            this.renderer.addClass(this.element, 'sticky');
        }
        else {
            this.removeFixedNav();
        }
    };
    FixedNavDirective.prototype.removeFixedNav = function () {
        this.renderer.removeClass(this.mainContent, 'menu-margin');
        this.renderer.removeClass(this.element, 'sticky');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FixedNavDirective.prototype, "onScroll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FixedNavDirective.prototype, "onTouchMove", null);
    FixedNavDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fixedNav]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], FixedNavDirective);
    return FixedNavDirective;
}());

//# sourceMappingURL=fixed-nav.directive.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickStopPropagation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickStopPropagation = /** @class */ (function () {
    function ClickStopPropagation() {
    }
    ClickStopPropagation.prototype.onClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickStopPropagation.prototype, "onClick", null);
    ClickStopPropagation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[click-stop-propagation]'
        })
    ], ClickStopPropagation);
    return ClickStopPropagation;
}());

//# sourceMappingURL=stop-propagation.directive.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMinDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomMinDirective = /** @class */ (function () {
    function CustomMinDirective() {
    }
    CustomMinDirective_1 = CustomMinDirective;
    CustomMinDirective.prototype.validate = function (c) {
        var v = c.value;
        return (v != null && v < this.customMin) ? { 'customMin': true } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CustomMinDirective.prototype, "customMin", void 0);
    CustomMinDirective = CustomMinDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[customMin][formControlName],[customMin][formControl],[customMin][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: CustomMinDirective_1, multi: true }]
        })
    ], CustomMinDirective);
    return CustomMinDirective;
    var CustomMinDirective_1;
}());

//# sourceMappingURL=custom-min-validator.directive.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomMaxDirective = /** @class */ (function () {
    function CustomMaxDirective() {
    }
    CustomMaxDirective_1 = CustomMaxDirective;
    CustomMaxDirective.prototype.validate = function (c) {
        var v = c.value;
        return (v != null && v > this.customMax) ? { 'customMax': true } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CustomMaxDirective.prototype, "customMax", void 0);
    CustomMaxDirective = CustomMaxDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[customMax][formControlName],[customMax][formControl],[customMax][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: CustomMaxDirective_1, multi: true }]
        })
    ], CustomMaxDirective);
    return CustomMaxDirective;
    var CustomMaxDirective_1;
}());

//# sourceMappingURL=custom-max-validator.directive.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecimalsInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DecimalsInputDirective = /** @class */ (function () {
    function DecimalsInputDirective() {
        this.decimalSeparator = '.';
    }
    DecimalsInputDirective.prototype.onblur = function (event) {
        var value = event.target.value;
        //Cambio coma por punto
        var format = value.replace(',', this.decimalSeparator);
        //Redondeo
        var round = Math.round(format);
        event.target.value = round;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DecimalsInputDirective.prototype, "onblur", null);
    DecimalsInputDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[decimalsInput]'
        })
    ], DecimalsInputDirective);
    return DecimalsInputDirective;
}());

//# sourceMappingURL=decimals-input.directive.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedElementDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FixedElementDirective = /** @class */ (function () {
    function FixedElementDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    FixedElementDirective.prototype.onScroll = function (_$event) {
        this.adjustElement();
    };
    FixedElementDirective.prototype.onTouchMove = function (_$event) {
        this.adjustElement();
    };
    FixedElementDirective.prototype.adjustElement = function () {
        if (window.scrollY >= this.offsetY && !this.element.classList.contains('sticky')) {
            var offsetLeft = this.element.offsetLeft + parseInt(this.offsetX);
            this.renderer.addClass(this.element, 'sticky');
            this.renderer.setStyle(this.element, 'left', offsetLeft);
        }
        else if (window.scrollY < this.offsetY) {
            this.renderer.removeClass(this.element, 'sticky');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FixedElementDirective.prototype, "offsetY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FixedElementDirective.prototype, "offsetX", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FixedElementDirective.prototype, "onScroll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FixedElementDirective.prototype, "onTouchMove", null);
    FixedElementDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fixedElement]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], FixedElementDirective);
    return FixedElementDirective;
}());

//# sourceMappingURL=fixed-element.directive.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransitionPageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransitionPageDirective = /** @class */ (function () {
    function TransitionPageDirective(elementRef, render, router) {
        this.elementRef = elementRef;
        this.render = render;
        this.router = router;
        this.configure();
    }
    TransitionPageDirective.prototype.configure = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                _this.render.addClass(element, 'fadeIn');
                setTimeout(function () {
                    _this.render.removeClass(element, 'fadeIn');
                }, 350);
            }
        });
    };
    TransitionPageDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[transition-page]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TransitionPageDirective);
    return TransitionPageDirective;
}());

//# sourceMappingURL=transition-page.directive.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_ts_spinner__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_limit_to_directive__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_pass_check_directive__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_retina_image_directive__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_fixed_nav_directive__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_stop_propagation_directive__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_custom_min_validator_directive__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_custom_max_validator_directive__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_decimals_input_directive__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_fixed_element_directive__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_transition_page_directive__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_key_event_directive__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_keep_html_pipe__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_limit_to_pipe__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_search_pipe__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_start_from_array_pipe__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_remove_final_spaces_pipe__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_safe_url_pipe__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_is_not_empty_object_pipe__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_nombre_sexo_pipe__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_group_by_pipe__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_highlight_pipe__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_custom_date_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_breakpoint_provider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_social_provider__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_cache_provider__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__pipes_limit_to_pipe__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_nombre_sexo_pipe__["a" /* NombreSexoPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_start_from_array_pipe__["a" /* StartFromArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_remove_final_spaces_pipe__["a" /* RemoveFinalSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_is_not_empty_object_pipe__["a" /* IsNotEmptyObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_highlight_pipe__["a" /* HighlightPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_custom_date_pipe__["a" /* CustomDatePipe */],
                __WEBPACK_IMPORTED_MODULE_26__providers_breakpoint_provider__["a" /* BreakpointProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_social_provider__["a" /* SocialProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_cache_provider__["a" /* CacheProvider */]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng_ts_spinner__["a" /* NgTsSpinnerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__pipes_limit_to_pipe__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_start_from_array_pipe__["a" /* StartFromArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_remove_final_spaces_pipe__["a" /* RemoveFinalSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_nombre_sexo_pipe__["a" /* NombreSexoPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_keep_html_pipe__["a" /* EscapeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_highlight_pipe__["a" /* HighlightPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_custom_date_pipe__["a" /* CustomDatePipe */],
                __WEBPACK_IMPORTED_MODULE_4__directives_limit_to_directive__["a" /* LimitToDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_pass_check_directive__["a" /* PassCheckDirective */],
                __WEBPACK_IMPORTED_MODULE_7__directives_fixed_nav_directive__["a" /* FixedNavDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_fixed_element_directive__["a" /* FixedElementDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_stop_propagation_directive__["a" /* ClickStopPropagation */],
                __WEBPACK_IMPORTED_MODULE_6__directives_retina_image_directive__["a" /* NgRetina */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_is_not_empty_object_pipe__["a" /* IsNotEmptyObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_9__directives_custom_min_validator_directive__["a" /* CustomMinDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directives_custom_max_validator_directive__["a" /* CustomMaxDirective */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_11__directives_decimals_input_directive__["a" /* DecimalsInputDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_transition_page_directive__["a" /* TransitionPageDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_key_event_directive__["a" /* KeyEventDirective */]
            ],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_15__pipes_keep_html_pipe__["a" /* EscapeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_limit_to_pipe__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_nombre_sexo_pipe__["a" /* NombreSexoPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_start_from_array_pipe__["a" /* StartFromArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_remove_final_spaces_pipe__["a" /* RemoveFinalSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_is_not_empty_object_pipe__["a" /* IsNotEmptyObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_highlight_pipe__["a" /* HighlightPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_custom_date_pipe__["a" /* CustomDatePipe */],
                __WEBPACK_IMPORTED_MODULE_4__directives_limit_to_directive__["a" /* LimitToDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_pass_check_directive__["a" /* PassCheckDirective */],
                __WEBPACK_IMPORTED_MODULE_7__directives_fixed_nav_directive__["a" /* FixedNavDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_fixed_element_directive__["a" /* FixedElementDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_stop_propagation_directive__["a" /* ClickStopPropagation */],
                __WEBPACK_IMPORTED_MODULE_6__directives_retina_image_directive__["a" /* NgRetina */],
                __WEBPACK_IMPORTED_MODULE_9__directives_custom_min_validator_directive__["a" /* CustomMinDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directives_custom_max_validator_directive__["a" /* CustomMaxDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_decimals_input_directive__["a" /* DecimalsInputDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_transition_page_directive__["a" /* TransitionPageDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_key_event_directive__["a" /* KeyEventDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyEventDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeyEventDirective = /** @class */ (function () {
    function KeyEventDirective() {
        this.enterKey = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyEnter = 13;
    }
    KeyEventDirective.prototype.keyboardInput = function (event) {
        this.checkKey(event);
    };
    KeyEventDirective.prototype.checkKey = function (event) {
        if (event.keyCode == this.keyEnter) {
            event.preventDefault();
            this.enterKey.emit();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], KeyEventDirective.prototype, "enterKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], KeyEventDirective.prototype, "keyboardInput", null);
    KeyEventDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[keyEvent]'
        }),
        __metadata("design:paramtypes", [])
    ], KeyEventDirective);
    return KeyEventDirective;
}());

//# sourceMappingURL=key-event.directive.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    EscapeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keepHtml',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());

//# sourceMappingURL=keep-html.pipe.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitToPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitToPipe = /** @class */ (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    LimitToPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'limitTo',
            pure: false
        })
    ], LimitToPipe);
    return LimitToPipe;
}());

//# sourceMappingURL=limit-to.pipe.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_i18n_i18n_service__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPipe = /** @class */ (function () {
    function SearchPipe(i18nService) {
        this.i18nService = i18nService;
    }
    SearchPipe.prototype.transform = function (items, field, value, defaultValue) {
        if (!items)
            return [];
        if (value === this.i18nService.instant(defaultValue))
            return items;
        return items.filter(function (it) { return it[field] !== undefined && it[field].toLowerCase().includes(value.toLowerCase()); });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
        //https://hassantariqblog.wordpress.com/2017/03/16/angular2-creating-custom-search-filter-pipe-for-ngfor-directive/
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_i18n_i18n_service__["a" /* I18nService */]])
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartFromArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StartFromArrayPipe = /** @class */ (function () {
    function StartFromArrayPipe() {
    }
    StartFromArrayPipe.prototype.transform = function (items, start, limit) {
        if (!items || !items.length) {
            return;
        }
        start = +start;
        var filteredItems = items.slice(start, start + limit);
        return filteredItems;
    };
    StartFromArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'startFromArray'
        })
        //https://hassantariqblog.wordpress.com/2017/03/16/angular2-creating-custom-search-filter-pipe-for-ngfor-directive/
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StartFromArrayPipe);
    return StartFromArrayPipe;
}());

//# sourceMappingURL=start-from-array.pipe.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveFinalSpacesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveFinalSpacesPipe = /** @class */ (function () {
    function RemoveFinalSpacesPipe() {
    }
    RemoveFinalSpacesPipe.prototype.transform = function (value) {
        if (!(typeof value === 'string')) {
            return value;
        }
        return value.trim();
    };
    RemoveFinalSpacesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'removeFinalSpaces',
            pure: false
        })
    ], RemoveFinalSpacesPipe);
    return RemoveFinalSpacesPipe;
}());

//# sourceMappingURL=remove-final-spaces.pipe.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustUrl(content);
    };
    SafeUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeUrl',
            pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());

//# sourceMappingURL=safe-url.pipe.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsNotEmptyObjectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IsNotEmptyObjectPipe = /** @class */ (function () {
    function IsNotEmptyObjectPipe() {
    }
    IsNotEmptyObjectPipe.prototype.transform = function (obj) {
        return Object.keys(obj).length !== 0;
    };
    IsNotEmptyObjectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'isNotEmptyObject',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], IsNotEmptyObjectPipe);
    return IsNotEmptyObjectPipe;
}());

//# sourceMappingURL=is-not-empty-object.pipe.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NombreSexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NombreSexoPipe = /** @class */ (function () {
    function NombreSexoPipe() {
    }
    NombreSexoPipe.prototype.transform = function (value) {
        if (!value || !value.length) {
            return;
        }
        if (value.trim().toLowerCase() == 'h') {
            return 'Hombre';
        }
        else if (value.trim().toLowerCase() == 'm') {
            return 'Mujer';
        }
        else {
            return '';
        }
    };
    NombreSexoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'nombreSexo',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], NombreSexoPipe);
    return NombreSexoPipe;
}());

//# sourceMappingURL=nombre-sexo.pipe.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, property) {
        // prevents the application from breaking if the array of objects doesn't exist yet
        if (!collection) {
            return null;
        }
        var groupedCollection = collection.reduce(function (previous, current) {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        // this will return an array of objects, each object containing a group of objects
        return Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
    };
    GroupByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'groupBy' })
    ], GroupByPipe);
    return GroupByPipe;
}());

//# sourceMappingURL=group-by.pipe.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (data, highlightText, option, caseSensitive, highlightStyleName) {
        if (option === void 0) { option = 'Single-Match'; }
        if (caseSensitive === void 0) { caseSensitive = false; }
        if (highlightStyleName === void 0) { highlightStyleName = 'search-highlight'; }
        if (highlightText && data && option) {
            var regex = '';
            var caseFlag = !caseSensitive ? 'i' : '';
            switch (option) {
                case 'Single-Match': {
                    regex = new RegExp(highlightText, caseFlag);
                    break;
                }
                case 'Single-And-StartsWith-Match': {
                    regex = new RegExp('^' + highlightText, caseFlag);
                    break;
                }
                case 'Multi-Match': {
                    regex = new RegExp(highlightText, 'g' + caseFlag);
                    break;
                }
                default: {
                    // default will be a global case-insensitive match
                    regex = new RegExp(highlightText, 'gi');
                }
            }
            data = data.replace(regex, function (match) { return "<span class=\"" + highlightStyleName + "\">" + match + "</span>"; });
            if (data.indexOf('</span> ') != -1) {
                data = data.replace('</span> ', '</span>&nbsp;');
            }
            if (data.indexOf(' <span') != -1) {
                data = data.replace(' <span', '&nbsp;<span');
            }
        }
        return data;
    };
    HighlightPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'highlight'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], HighlightPipe);
    return HighlightPipe;
}());

//# sourceMappingURL=highlight.pipe.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomDatePipe = /** @class */ (function () {
    function CustomDatePipe() {
    }
    CustomDatePipe.prototype.transform = function (value, format) {
        if (value != null) {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('es');
            if (format == 'long') {
                value = datePipe.transform(value, 'yMMMMEEEEd');
                value = value.charAt(0).toUpperCase() + value.slice(1);
            }
            else if (format == 'long hour') {
                value = datePipe.transform(value, 'd/MM/yyyy, jm');
                value = value.charAt(0).toUpperCase() + value.slice(1);
            }
            else if (format == 'short') {
                value = datePipe.transform(value, 'jm') + 'h';
            }
            else {
                value = datePipe.transform(value, 'jm') + 'h - ' + datePipe.transform(value, 'd/MM/yyyy');
            }
        }
        else {
            value = '';
        }
        return value;
    };
    CustomDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'customDate',
        })
    ], CustomDatePipe);
    return CustomDatePipe;
}());

//# sourceMappingURL=custom-date.pipe.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialProvider = /** @class */ (function () {
    function SocialProvider(socialSharing) {
        this.socialSharing = socialSharing;
    }
    SocialProvider.prototype.regularShare = function (msg) {
        this.socialSharing.share('Compartido desde San Juan Xar - ' + msg, null, null, null);
    };
    SocialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], SocialProvider);
    return SocialProvider;
}());

//# sourceMappingURL=social.provider.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_http_http_cache_http_cache_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_global_global_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_env_provider__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CacheProvider = /** @class */ (function () {
    function CacheProvider(httpCacheService, globalService, envProvider) {
        this.httpCacheService = httpCacheService;
        this.globalService = globalService;
        this.envProvider = envProvider;
    }
    CacheProvider.prototype.deleteCachesAndCookies = function () {
        if (!this.envProvider.isCordova())
            return;
        if (window.cookieEmperor) {
            window.cookieEmperor.clearAll();
        }
        this.httpCacheService.cleanCache();
        this.globalService.deleteGlobalData();
    };
    CacheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_http_http_cache_http_cache_service__["a" /* HttpCacheService */],
            __WEBPACK_IMPORTED_MODULE_2__core_global_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__env_env_provider__["a" /* EnvProvider */]])
    ], CacheProvider);
    return CacheProvider;
}());

//# sourceMappingURL=cache.provider.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
var GlobalData = /** @class */ (function () {
    function GlobalData() {
        this.isIOS = false;
    }
    GlobalData.prototype.getUser = function () {
        return this.nombre + ' ' + this.apellidos;
    };
    return GlobalData;
}());

//# sourceMappingURL=global.model.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_i18n_i18n_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomHeaderComponent = /** @class */ (function () {
    function CustomHeaderComponent(i18nService, navCtrl, breakpointService) {
        this.i18nService = i18nService;
        this.navCtrl = navCtrl;
        this.breakpointService = breakpointService;
        this.title = 'Cuida tus vecinos';
        this.langSelected = 'es';
        this.isXS = false;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    CustomHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.langSelected = this.i18nService.getCurrentLanguage();
        this.subscriptions.add(this.breakpointService.isXS$.subscribe(function (isXS) {
            _this.isXS = isXS;
        }));
    };
    CustomHeaderComponent.prototype.changeLang = function (lang) {
        this.i18nService.setLanguage(lang);
        this.langSelected = lang;
    };
    CustomHeaderComponent.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page, null, { animate: false });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CustomHeaderComponent.prototype, "title", void 0);
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-header',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\custom-header\custom-header.html"*/'<ion-header>\n\n    <ion-navbar class="custom-container">\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <div class="header-block" (click)="openPage(\'HomePage\')">\n\n            <img src="assets/imgs/logos/logo.png" />\n\n            <div class="header-titles">\n\n                <div translate class="header-title">CUIDA A TUS VECIN@S</div>\n\n                <div translate class="header-subtitle">Haz barrio</div>\n\n            </div>\n\n            <div class="idioma">\n\n                <span (click)="changeLang(\'es\')" [ngClass]="{ \'lang-selected\' : langSelected == \'es\'}">ES</span>|\n\n                <span (click)="changeLang(\'eu\')" [ngClass]="{ \'lang-selected\' : langSelected == \'eu\'}">EU</span>\n\n            </div>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\custom-header\custom-header.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_i18n_i18n_service__["a" /* I18nService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__["a" /* BreakpointProvider */]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());

//# sourceMappingURL=custom-header.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_gallery_model__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_breakpoint_provider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(breakpointService) {
        this.breakpointService = breakpointService;
        this.images = [];
        this.slidesPerView = 1;
        this.direction = 'horizontal';
        this.imagesNormalizadas = [];
        this.isXS = false;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setImagenes();
        this.subscriptions.add(this.breakpointService.isXS$.subscribe(function (isXS) {
            _this.isXS = isXS;
            _this.slidesPerView = 2;
            _this.direction = 'vertical';
        }));
    };
    ImageGalleryComponent.prototype.ngOnChanges = function () {
        this.setImagenes();
    };
    ImageGalleryComponent.prototype.setImagenes = function () {
        var _this = this;
        if (this.images) {
            this.imagesNormalizadas = this.images.filter(function (i) { return i.tipo == __WEBPACK_IMPORTED_MODULE_1__image_gallery_model__["b" /* eTipoImagen */].Normalizada; });
            this.imagesNormalizadas.forEach(function (img) {
                var thumbnails = _this.images.filter(function (i) { return i.tipo == __WEBPACK_IMPORTED_MODULE_1__image_gallery_model__["b" /* eTipoImagen */].Thumbnail && i.id == img.id; });
                if (thumbnails && thumbnails.length > 0) {
                    img.thumbnail = thumbnails[0].ruta;
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ImageGalleryComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ImageGalleryComponent.prototype, "slidesPerView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageGalleryComponent.prototype, "direction", void 0);
    ImageGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'image-gallery',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\image-gallery\image-gallery.html"*/'<div class="content-gallery" [ngClass]="{\'content-gallery--modal\': (slidesPerView == 1)}">\n\n    <ion-content>\n\n        <ion-slides class="image-slider" loop="false" slidesPerView="{{slidesPerView}}" direction="{{direction}}" spaceBetween="50" pager="true" zoom="true">\n\n            <ion-slide *ngFor="let img of imagesNormalizadas">\n\n                <img [src]="img.thumbnail" class="thumb-img" [imageViewer]="img.ruta" />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </ion-content>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\image-gallery\image-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_providers_breakpoint_provider__["a" /* BreakpointProvider */]])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());

//# sourceMappingURL=image-gallery.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_custom_header_custom_header__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomHeaderModule = /** @class */ (function () {
    function CustomHeaderModule() {
    }
    CustomHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_custom_header_custom_header__["a" /* CustomHeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_custom_header_custom_header__["a" /* CustomHeaderComponent */]
            ]
        })
    ], CustomHeaderModule);
    return CustomHeaderModule;
}());

//# sourceMappingURL=custom-header.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer__["a" /* FooterComponent */]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(navCtrl, breakpointService) {
        this.navCtrl = navCtrl;
        this.breakpointService = breakpointService;
        this.interior = false;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        this.isXS = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.breakpointService.isXS$.subscribe(function (isXS) {
            _this.isXS = isXS;
        }));
    };
    FooterComponent.prototype.goPage = function (page) {
        var activePage = this.navCtrl.getActive();
        if (activePage.component && activePage.component.name
            && page == activePage.component.name) {
            return;
        }
        this.navCtrl.push(page, null, { animate: false });
    };
    FooterComponent.prototype.goTwitter = function () {
        window.open('https://twitter.com/SAN_JUAN_XAR', '_blank');
    };
    FooterComponent.prototype.goFacebook = function () {
        window.open('https://www.facebook.com/sanjuan.xar', '_blank');
    };
    FooterComponent.prototype.goYoutube = function () {
        window.open('https://www.youtube.com/channel/UCB1RCMLqPBkKPH-N-e1AkPg', '_blank');
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FooterComponent.prototype, "interior", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\footer\footer.html"*/'<div class="footer" [ngClass]="{\'footer--interior\': interior==true }">\n\n    <div class="custom-container">\n\n        <img alt="logo pacto" class="logo" src="assets/imgs/logos/pacto-del-mayor.png" (click)="goNavarra()">\n\n        <img alt="logo maratxa" class="logo" src="assets/imgs/logos/maratxa.png" (click)="goNavarra()">\n\n        <img alt="logo san juan xar" class="logo" src="assets/imgs/logos/sanjuanxar.png" (click)="goNavarra()">\n\n        <div class="rrss">\n\n            <ion-icon name="logo-facebook" (click)="goFacebook()"></ion-icon>\n\n            <ion-icon name="logo-twitter" (click)="goTwitter()"></ion-icon>\n\n            <ion-icon name="logo-youtube" (click)="goYoutube()"></ion-icon>\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__["a" /* BreakpointProvider */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_correos_correos_provider_interface__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_correos_correos_model__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactoPage = /** @class */ (function () {
    function ContactoPage(formBuilder, navParams, correosProvider) {
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.correosProvider = correosProvider;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
        this.loader = null;
    }
    ContactoPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.esFormularioAyuda = this.navParams.get('esFormularioAyuda');
        }
        this.formContacto = this.formBuilder.group({
            nombre: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            telefono: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(9), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            email: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])],
            quenecesitas: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])]
        });
    };
    ContactoPage.prototype.enviar = function () {
        var _this = this;
        var correo = new __WEBPACK_IMPORTED_MODULE_6__providers_correos_correos_model__["a" /* Correo */](this.formContacto.value.nombre, this.formContacto.value.telefono, this.formContacto.value.email);
        if (this.esFormularioAyuda)
            correo.quenecesitas = this.formContacto.value.quenecesitas;
        this.correosProvider.mandarCorreo(correo)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["finalize"])(function () {
            if (_this.loader)
                _this.loader.dismiss();
        }))
            .subscribe(function (res) {
            if (res == true) {
                console.log('Ok');
                _this.sent = true;
            }
        });
    };
    ContactoPage.prototype.llamar = function () {
        window.location.href = 'tel:+34607343254';
    };
    ContactoPage.prototype.escribir = function () {
        window.location.href = 'mailto:donibane.voluntarios.sanjuan@gmail.com';
    };
    ContactoPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contacto-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\contacto\contacto.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="lnk-wrapper">\n\n        <div class="titulo-haciendo">\n\n            <img *ngIf="esFormularioAyuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n            <img *ngIf="!esFormularioAyuda" alt="icono-voluntario" src="assets/imgs/usuarios/voluntarios.png" />\n\n            <span translate>Contacta con nosotros</span>\n\n        </div>\n\n    </div>\n\n    <div *ngIf="!sent" class="custom-container descripcion">\n\n\n\n        <form class="ca__formulario" [formGroup]="formContacto" novalidate>\n\n            <ion-item [ngClass]="{ \'error-item\' : formContacto.controls[\'nombre\'].hasError(\'required\')}">\n\n                <ion-label stacked translate>Tu nombre *</ion-label>\n\n                <ion-input type="text" autofocus="autofocus" formControlName="nombre" value="" name="nombre" autocomplete="name" required>\n\n                </ion-input>\n\n            </ion-item>\n\n            <div *ngIf="(formContacto.get(\'nombre\').dirty || formContacto.get(\'nombre\').dirty)">\n\n                <div class="error" *ngIf="formContacto.controls[\'nombre\'].hasError(\'required\')" translate>\n\n                    Por favor, introduce tu nombre\n\n                </div>\n\n            </div>\n\n            <ion-item [ngClass]="{ \'error-item\' : formContacto.controls[\'nombre\'].hasError(\'required\')}">\n\n                <ion-label stacked translate>Tu teléfono *</ion-label>\n\n                <ion-input class="telefono" #telefonoInput type="text" formControlName="telefono" autocomplete="tel" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="9" value="" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked translate>Tu e-mail (opcional)</ion-label>\n\n                <ion-input type="email" formControlName="email" autocomplete="email"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="(formContacto.get(\'email\').dirty || formContacto.get(\'email\').dirty)">\n\n                <div class="error" *ngIf="formContacto.controls[\'email\'].hasError(\'emailCustom\')" translate>\n\n                    Introduce un email correcto\n\n                </div>\n\n            </div>\n\n\n\n            <ion-item *ngIf="esFormularioAyuda" [ngClass]="{ \'error-item\' : formContacto.controls[\'quenecesitas\'].hasError(\'required\')}">\n\n                <ion-label stacked translate>Cuéntanos que necesitas</ion-label>\n\n                <ion-input type="text" autofocus="autofocus" formControlName="quenecesitas" value="">\n\n                </ion-input>\n\n            </ion-item>\n\n            <p class="leyenda">\n\n                <em translate>* Campos obligatorios</em>\n\n            </p>\n\n\n\n            <div class="btn-wrapper">\n\n                <button type="button" ion-button class="c-btn btn-enviar" (click)="enviar()" [disabled]="!formContacto.valid">\n\n                    <span translate>Enviar</span>\n\n                </button>\n\n            </div>\n\n\n\n            <div class="btn-secondary-wrapper" translate>\n\n                <div translate>O si lo prefieres...</div>\n\n                <button type="button" ion-button class="c-btn" (click)="llamar()">\n\n                    <ion-icon name="call"></ion-icon>\n\n                    <span translate>Llámanos</span>\n\n                </button>\n\n                <button type="button" ion-button class="c-btn" (click)="escribir()">\n\n                    <ion-icon name="mail"></ion-icon>\n\n                    <span translate>Escríbenos</span>\n\n                </button>\n\n            </div>\n\n        </form>\n\n    </div>\n\n    <div translate *ngIf="sent">\n\n        Solicitud correctamente envíada. En breve nos pondremos en contacto contigo.\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\contacto\contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_correos_correos_provider_interface__["a" /* ICorreosProvider */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Correo; });
var Correo = /** @class */ (function () {
    function Correo(nombre, telefono, email, quenecesitas) {
        if (nombre === void 0) { nombre = null; }
        if (telefono === void 0) { telefono = null; }
        if (email === void 0) { email = null; }
        if (quenecesitas === void 0) { quenecesitas = null; }
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.quenecesitas = quenecesitas;
    }
    return Correo;
}());

//# sourceMappingURL=correos.model.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanJuanXarApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_env_provider__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cordova_cordova_provider__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_i18n_i18n_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_que_hacemos_que_hacemos__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ayuda_ayuda__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_voluntarios_voluntarios__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_galeria_galeria__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SanJuanXarApp = /** @class */ (function () {
    function SanJuanXarApp(envProvider, i18nService, cordovaProvider, cacheStorage, app, platform) {
        var _this = this;
        this.envProvider = envProvider;
        this.i18nService = i18nService;
        this.cordovaProvider = cordovaProvider;
        this.cacheStorage = cacheStorage;
        this.app = app;
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { component: __WEBPACK_IMPORTED_MODULE_7__pages_que_hacemos_que_hacemos__["a" /* QueHacemosPage */], title: '¿Qué estamos haciendo?', icon: 'assets/imgs/icons/ayuda.png' },
            { component: __WEBPACK_IMPORTED_MODULE_11__pages_galeria_galeria__["a" /* GaleriaPage */], title: 'Galería de fotos', icon: 'assets/imgs/icons/galeria.png' },
            { component: __WEBPACK_IMPORTED_MODULE_9__pages_ayuda_ayuda__["a" /* AyudaPage */], title: 'Necesito ayuda', icon: 'assets/imgs/usuarios/ayuda.png' },
            { component: __WEBPACK_IMPORTED_MODULE_10__pages_voluntarios_voluntarios__["a" /* VoluntariosPage */], title: 'Quiero ser voluntari@', icon: 'assets/imgs/usuarios/voluntarios.png' }
        ];
        this.platform.ready().then(function () {
            //So app doesn't close when hockey app activities close
            //This also has a side effect of unable to close the app when on the rootPage and using the back button.
            //Back button will perform as normal on other pages and pop to the previous page.
            platform.registerBackButtonAction(function () {
                var nav = _this.app.getRootNav();
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    nav.setRoot(_this.rootPage);
                }
            });
        });
        this.configureStorageCache();
    }
    SanJuanXarApp.prototype.ngOnInit = function () {
        this.i18nService.init();
        this.initCordova();
    };
    SanJuanXarApp.prototype.goTwitter = function () {
        window.open('https://twitter.com/SAN_JUAN_XAR', '_blank');
    };
    SanJuanXarApp.prototype.goFacebook = function () {
        window.open('https://www.facebook.com/sanjuan.xar', '_blank');
    };
    SanJuanXarApp.prototype.goYoutube = function () {
        window.open('https://www.youtube.com/channel/UCB1RCMLqPBkKPH-N-e1AkPg', '_blank');
    };
    SanJuanXarApp.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    SanJuanXarApp.prototype.configureStorageCache = function () {
        this.cacheStorage.setDefaultTTL(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* AppSettings */].cacheStorage.ttl);
        this.cacheStorage.setOfflineInvalidate(false);
    };
    SanJuanXarApp.prototype.initCordova = function () {
        if (this.envProvider.isCordova()) {
            this.cordovaProvider.init();
        }
    };
    SanJuanXarApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], SanJuanXarApp.prototype, "nav", void 0);
    SanJuanXarApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\app\app.html"*/'<ion-menu [content]="content" [persistent]="false">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        <img src="assets/imgs/logos/sanjuanxar.png" click="openPage(\'HomePage\')" />\n\n        <div class="menu-title" click="openPage(\'HomePage\')">\n\n          <div translate class="title">Cuida a tus vecinos</div>\n\n          <div translate class="subtitle">Haz barrio</div>\n\n        </div>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <div>\n\n          <img src="{{ p.icon }}" />\n\n          {{p.title}}\n\n        </div>\n\n      </ion-item>\n\n      <ion-item class="rrss">\n\n          <ion-icon name="logo-facebook" (click)="goFacebook()"></ion-icon>\n\n          <ion-icon name="logo-twitter" (click)="goTwitter()"></ion-icon>\n\n          <ion-icon name="logo-youtube" (click)="goYoutube()"></ion-icon>\n\n      </ion-item>\n\n      <ion-item menuClose ion-item  (click)="exitApp()">\n\n        <div>\n\n          <img src="assets/imgs/icons/exit.png" />\n\n          Salir\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__env_env_provider__["a" /* EnvProvider */],
            __WEBPACK_IMPORTED_MODULE_6__core_i18n_i18n_service__["a" /* I18nService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cordova_cordova_provider__["a" /* CordovaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */]])
    ], SanJuanXarApp);
    return SanJuanXarApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createHttpService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_device_detector__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_device_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errorHandler_errorHandler__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_global_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_http_auth_http_auth__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_http_auth_http_auth_error__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_http_cache_http_cache_interceptor__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_http_cache_http_cache_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_http_schema_http_schema_interceptor__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__http_http_schema_http_schema_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__http_http_service__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__i18n_i18n_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__i18n_i18n_missing_handler__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logging_logging_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__env_env_provider__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



















function createHttpService(httpHandler, interceptors) {
    return new __WEBPACK_IMPORTED_MODULE_14__http_http_service__["b" /* HttpService */](httpHandler, interceptors);
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " ha sido ya cargado. Importa el m\u00F3dulo Coreo unicamente en AppModule.");
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    missingTranslationHandler: { provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_16__i18n_i18n_missing_handler__["a" /* MyMissingTranslationHandler */] },
                    useDefaultLang: false
                }),
                __WEBPACK_IMPORTED_MODULE_5_ngx_device_detector__["DeviceDetectorModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__i18n_i18n_service__["a" /* I18nService */],
                __WEBPACK_IMPORTED_MODULE_11__http_http_cache_http_cache_service__["a" /* HttpCacheService */],
                __WEBPACK_IMPORTED_MODULE_13__http_http_schema_http_schema_service__["a" /* HttpSchemaService */],
                __WEBPACK_IMPORTED_MODULE_7__global_global_service__["a" /* GlobalService */],
                __WEBPACK_IMPORTED_MODULE_17__logging_logging_service__["a" /* LoggingProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__errorHandler_errorHandler__["a" /* AppErrorHandler */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_14__http_http_service__["a" /* HTTP_DYNAMIC_INTERCEPTORS */]],
                    useFactory: createHttpService
                },
                { provide: __WEBPACK_IMPORTED_MODULE_14__http_http_service__["a" /* HTTP_DYNAMIC_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_8__http_http_auth_http_auth__["a" /* HttpAuthInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_14__http_http_service__["a" /* HTTP_DYNAMIC_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__http_http_cache_http_cache_interceptor__["a" /* HttpCacheInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_14__http_http_service__["a" /* HTTP_DYNAMIC_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_12__http_http_schema_http_schema_interceptor__["a" /* HttpSchemaInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_9__http_http_auth_http_auth_error__["a" /* ErrorNotifierService */],
                __WEBPACK_IMPORTED_MODULE_18__env_env_provider__["a" /* EnvProvider */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logging_logging_service__ = __webpack_require__(92);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppErrorHandler = /** @class */ (function (_super) {
    __extends(AppErrorHandler, _super);
    function AppErrorHandler(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.errorLogging = new Error('Error desconocido');
        return _this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        _super.prototype.handleError.call(this, error);
        if (typeof error == 'object') {
            this.errorLogging = error;
        }
        else if (typeof error == 'string') {
            this.errorLogging = new Error(error);
        }
        var loggingService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__logging_logging_service__["a" /* LoggingProvider */]);
        loggingService.logJsError(this.errorLogging);
    };
    AppErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AppErrorHandler);
    return AppErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"]));

//# sourceMappingURL=errorHandler.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpAuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_auth_error__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_constants__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_env_provider__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpAuthInterceptor = /** @class */ (function () {
    function HttpAuthInterceptor(errorService, envProvider) {
        this.errorService = errorService;
        this.envProvider = envProvider;
        this.urlLogout = '/logout';
    }
    HttpAuthInterceptor.prototype.setContentAcceptHeader = function (req) {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        return req;
    };
    HttpAuthInterceptor.prototype.addAPIBasePath = function (req, metadata) {
        var newReq;
        if (metadata && metadata.responseType) {
            newReq = req.clone({
                responseType: metadata.responseType
            });
        }
        else {
            var apiUrl = req.url;
            if (!req.urlWithParams.startsWith('https')) {
                apiUrl = this.envProvider.getApiUrl();
                newReq = req.clone({
                    url: apiUrl + req.url
                });
            }
            else {
                newReq = req;
            }
        }
        return newReq;
    };
    HttpAuthInterceptor.prototype.intercept = function (req, metadata, next) {
        var _this = this;
        var newReq;
        newReq = this.setContentAcceptHeader(req);
        newReq = this.addAPIBasePath(newReq, metadata);
        return next.handle(newReq, metadata).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["timeout"])(__WEBPACK_IMPORTED_MODULE_5__app_app_constants__["a" /* AppSettings */].httpConfig.timeout), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) {
            if (err.error instanceof ErrorEvent) {
                _this.errorService.notifyError(err);
                return _this.handleError(err);
            }
            else {
                switch (err.status) {
                    default:
                        _this.errorService.notifyError(err);
                        return _this.handleError(err);
                }
            }
        }));
    };
    HttpAuthInterceptor.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpErrorResponse */]) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        }
        else {
            errMsg = error.message ? error.message : error.toString();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
        }
    };
    HttpAuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_auth_error__["a" /* ErrorNotifierService */],
            __WEBPACK_IMPORTED_MODULE_6__env_env_provider__["a" /* EnvProvider */]])
    ], HttpAuthInterceptor);
    return HttpAuthInterceptor;
}());

//# sourceMappingURL=http-auth.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_cache_service__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpCacheInterceptor = /** @class */ (function () {
    function HttpCacheInterceptor(cacheService) {
        this.cacheService = cacheService;
    }
    HttpCacheInterceptor.prototype.intercept = function (req, metadata, next) {
        //Continuar si no hay que aplicar filtro de cache
        if (!metadata.cache) {
            return next.handle(req, metadata);
        }
        else {
            var cachedResponse = this.cacheService.getCacheData(req.url, req.params);
            return cachedResponse ? __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(cachedResponse) : this.sendRequest(req, metadata, next);
        }
    };
    HttpCacheInterceptor.prototype.sendRequest = function (req, metadata, next) {
        var _this = this;
        return next.handle(req, metadata).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (event) {
            // There may be other events besides the response.
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]) {
                _this.cacheService.setCacheData(req.url, req.params, event); // Update the cache.
            }
        }));
    };
    HttpCacheInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_cache_service__["a" /* HttpCacheService */]])
    ], HttpCacheInterceptor);
    return HttpCacheInterceptor;
}());

//# sourceMappingURL=http-cache-interceptor.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpSchemaInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_logging_logging_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_schema_service__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpSchemaInterceptor = /** @class */ (function () {
    function HttpSchemaInterceptor(schemaService, loggingService) {
        this.schemaService = schemaService;
        this.loggingService = loggingService;
    }
    HttpSchemaInterceptor.prototype.intercept = function (req, metadata, next) {
        var _this = this;
        //Continuar si no hay que aplicar filtro de schema
        if (metadata.jsonSchema == null)
            return next.handle(req, metadata);
        return next.handle(req, metadata)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["flatMap"])(function (event, _index) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]) {
                var validationErrors = _this.schemaService.validate(metadata.jsonSchema, event.body);
                if (validationErrors.length > 0) {
                    var errorMsg = 'Schema no válido: ' + validationErrors;
                    _this.loggingService.logJsError(new Error(errorMsg));
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errorMsg);
                }
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(event);
        }));
    };
    HttpSchemaInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__http_schema_service__["a" /* HttpSchemaService */], __WEBPACK_IMPORTED_MODULE_2__core_logging_logging_service__["a" /* LoggingProvider */]])
    ], HttpSchemaInterceptor);
    return HttpSchemaInterceptor;
}());

//# sourceMappingURL=http-schema-interceptor.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * Allow to override default interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 */
var HTTP_DYNAMIC_INTERCEPTORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Provides a base for HTTP client extension.
 * The default extension adds support for API prefixing, request caching and default error handler.
 */
var HttpService = /** @class */ (function () {
    function HttpService(httpHandler, interceptors) {
        var handler = {
            handle: function (req, _metadata) { return httpHandler.handle(req); }
        };
        if (interceptors) {
            handler = interceptors.reduceRight(function (next, interceptor) { return ({
                handle: function (req, metadata) { return interceptor.intercept(req, metadata, next); }
            }); }, handler);
        }
        this.handler = handler;
    }
    HttpService.prototype.config = function (metadata) {
        var _this = this;
        if (metadata === void 0) { metadata = { cache: false, jsonSchema: null }; }
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]({
            handle: function (req) { return _this.handler.handle(req, metadata); }
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(HTTP_DYNAMIC_INTERCEPTORS)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHandler */], Array])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLocalizacionProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_geolocalizacion_mapa_provider_interface__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geo_provider_interface__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geolocalizacion_geo_provider__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_address_suggestions_interface__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geolocalizacion_address_suggestions_provider__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_geolocalizacion_mapa_provider_fake__ = __webpack_require__(603);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GeoLocalizacionProviderModule = /** @class */ (function () {
    function GeoLocalizacionProviderModule() {
    }
    GeoLocalizacionProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__providers_geolocalizacion_mapa_provider_interface__["a" /* IMapaProvider */], useClass: __WEBPACK_IMPORTED_MODULE_6__providers_geolocalizacion_mapa_provider_fake__["a" /* MapaProviderFake */] },
                //Necesario hacer fake porque no podemos acceder a Internet desde el móvil de pruebas 
                { provide: __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_address_suggestions_interface__["a" /* IAddressSuggestionsProvider */], useClass: __WEBPACK_IMPORTED_MODULE_5__providers_geolocalizacion_address_suggestions_provider__["a" /* AddressSuggestionsProvider */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geo_provider_interface__["a" /* IGeoProvider */], useClass: __WEBPACK_IMPORTED_MODULE_3__providers_geolocalizacion_geo_provider__["a" /* GeoProvider */] }
            ]
        })
    ], GeoLocalizacionProviderModule);
    return GeoLocalizacionProviderModule;
}());

//# sourceMappingURL=geolocalizacion.provider.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMapaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IMapaProvider = /** @class */ (function () {
    function IMapaProvider() {
    }
    IMapaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IMapaProvider);
    return IMapaProvider;
}());

//# sourceMappingURL=mapa.provider.interface.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IGeoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IGeoProvider = /** @class */ (function () {
    function IGeoProvider() {
    }
    IGeoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IGeoProvider);
    return IGeoProvider;
}());

//# sourceMappingURL=geo.provider.interface.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_utils__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeoProvider = /** @class */ (function () {
    function GeoProvider() {
    }
    GeoProvider.prototype.getUserLocation = function () {
        var localizacion;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    localizacion = {
                        latitud: position.coords.latitude,
                        longitud: position.coords.longitude
                    };
                    observer.next(localizacion);
                    observer.complete();
                }, function (error) {
                    observer.error('Error obteniendo localizacion: ' + error);
                });
            }
        });
    };
    GeoProvider.prototype.getGeographicDistance = function (localizacion, localizacion2) {
        var latLng = new google.maps.LatLng(localizacion.latitud, localizacion.longitud);
        var latLng2 = new google.maps.LatLng(localizacion2.latitud, localizacion2.longitud);
        return __WEBPACK_IMPORTED_MODULE_2__shared_utils_utils__["a" /* Utils */].roundNumber(google.maps.geometry.spherical.computeDistanceBetween(latLng, latLng2) / 1000);
    };
    GeoProvider.prototype.calculateRoute = function (localizacion, localizacion2) {
        var km = 0;
        var pointA = new google.maps.LatLng(localizacion.latitud, localizacion.longitud);
        var pointB = new google.maps.LatLng(localizacion2.latitud, localizacion2.longitud);
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var selectedMode = 'DRIVING';
        directionsService.route({
            origin: pointA,
            destination: pointB,
            unitSystem: google.maps.UnitSystem.METRIC,
            travelMode: google.maps.TravelMode[selectedMode]
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                km = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        return km;
    };
    GeoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GeoProvider);
    return GeoProvider;
}());

//# sourceMappingURL=geo.provider.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.roundNumber = function (numero) {
        return Math.round(numero * 100) / 100;
    };
    Utils.htmlDecode = function (input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
    };
    Utils.getFechaActual = function () {
        return new Date().getTime();
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IAddressSuggestionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IAddressSuggestionsProvider = /** @class */ (function () {
    function IAddressSuggestionsProvider() {
    }
    IAddressSuggestionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IAddressSuggestionsProvider);
    return IAddressSuggestionsProvider;
}());

//# sourceMappingURL=address-suggestions.interface.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressSuggestionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressSuggestionsProvider = /** @class */ (function () {
    function AddressSuggestionsProvider(zone) {
        this.zone = zone;
        if (window.google) {
            this.googleAutocompleteService = new google.maps.places.AutocompleteService();
        }
    }
    AddressSuggestionsProvider.prototype.getAddressSugestions = function (filtro) {
        var _this = this;
        var sugerencias = [];
        if (this.googleAutocompleteService == undefined)
            this.googleAutocompleteService = new google.maps.places.AutocompleteService();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            if (filtro == null || filtro == '') {
                observer.next(sugerencias);
                observer.complete();
                return;
            }
            _this.googleAutocompleteService.getPlacePredictions({
                input: filtro,
                componentRestrictions: {
                    country: 'es'
                }
            }, function (predictions) {
                _this.zone.run(function () {
                    sugerencias = [];
                    if (predictions != null) {
                        predictions.forEach(function (prediction) {
                            sugerencias.push(new __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__["c" /* SugerenciaDireccion */](prediction.place_id, prediction.description, prediction.structured_formatting.main_text, prediction.structured_formatting.secondary_text));
                        });
                    }
                    observer.next(sugerencias.slice(0, 9));
                    observer.complete();
                });
            });
        });
    };
    AddressSuggestionsProvider.prototype.getLatLngByPlace = function (placeId) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK && results[0]) {
                    var position = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    };
                    observer.next(new __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */](position.lat, position.lng));
                }
            });
        });
    };
    AddressSuggestionsProvider.prototype.getPlaceByLatLng = function (loc) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var geocoder = new google.maps.Geocoder;
            var latlng = { lat: loc.latitud, lng: loc.longitud };
            geocoder.geocode({ 'location': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK && results[0]) {
                    if (results[0].address_components && results[0].address_components.length > 2) {
                        var direccion = new __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__["a" /* Direccion */](results[0].address_components[1].long_name, results[0].address_components[2].long_name);
                        console.log(results[0]);
                        observer.next(direccion);
                        observer.complete();
                    }
                    /*let partesAddress = results[0].formatted_address.split(',');
                    if (partesAddress.length > 2) {
                      let direccion: Direccion = new Direccion(partesAddress[0], partesAddress[2]);
                      console.log(results[0]);
                      observer.next(direccion);
                      observer.complete();
                    }*/
                }
            });
        });
    };
    AddressSuggestionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AddressSuggestionsProvider);
    return AddressSuggestionsProvider;
}());

//# sourceMappingURL=address-suggestions.provider.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapaProviderFake = /** @class */ (function () {
    function MapaProviderFake(zone) {
        this.zone = zone;
        this.markers = [];
        this.drag = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.getDrag$ = this.drag.asObservable();
    }
    MapaProviderFake.prototype.loadMap = function (elementoDom, currentLocation, centerLocation) {
        var center = new google.maps.LatLng(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* AppSettings */].defaultCenter.lat, __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* AppSettings */].defaultCenter.lng);
        if (centerLocation)
            center = new google.maps.LatLng(centerLocation.latitud, centerLocation.longitud);
        var opts = {
            center: center,
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            fullscreenControl: false,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_LEFT
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var map = new google.maps.Map(elementoDom, opts);
            if (currentLocation) {
                var infowindow_1 = new google.maps.InfoWindow();
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(currentLocation.latitud, currentLocation.longitud),
                    map: map,
                    icon: 'assets/imgs/current-location.png'
                });
                google.maps.event.addListener(marker, 'click', (function (marker) {
                    return function () {
                        infowindow_1.setContent('Tu localización');
                        infowindow_1.open(map, marker);
                    };
                })(marker));
            }
            observer.next(map);
            observer.complete();
        });
    };
    MapaProviderFake.prototype.addMarkers = function (map, marcadores, draggable) {
        var _this = this;
        if (draggable === void 0) { draggable = false; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.zone.run(function () {
                _this.clearMarkers();
                var infowindow = new google.maps.InfoWindow({ maxWidth: 290, maxHeight: 300 });
                google.maps.event.addListener(map, 'click', function () {
                    infowindow.close();
                });
                marcadores.map(function (marcador) {
                    if (marcador && marcador.latitud != null && marcador.longitud != null) {
                        infowindow.setContent(marcador.contenido);
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(marcador.latitud, marcador.longitud),
                            map: map,
                            draggable: draggable,
                            icon: marcador.icon
                        });
                        google.maps.event.addListener(marker, 'click', (function (marker) {
                            return function () {
                                infowindow.setContent(marcador.contenido, { maxWidth: 320 });
                                infowindow.open(map, marker);
                            };
                        })(marker));
                        if (draggable) {
                            _this.setDraggable(marker);
                        }
                        _this.markers.push(marker);
                        if (marcadores.length == 1) {
                            infowindow.open(map, marker);
                        }
                    }
                });
                if (marcadores.length > 1) {
                    _this.setCenterZoomDisplayMarkers(marcadores, map);
                }
                observer.next();
                observer.complete();
            });
        });
    };
    MapaProviderFake.prototype.setCenterZoomDisplayMarkers = function (markers, map) {
        var latLngList = [];
        markers.map(function (marcador) {
            if (marcador && marcador.latitud != null && marcador.longitud != null) {
                latLngList.push(new google.maps.LatLng(marcador.latitud, marcador.longitud));
            }
        });
        var latlngbounds = new google.maps.LatLngBounds();
        latLngList.forEach(function (latLng) {
            latlngbounds.extend(latLng);
        });
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);
    };
    MapaProviderFake.prototype.setZoom = function (map, zoom) {
        map.setZoom(zoom);
    };
    MapaProviderFake.prototype.setCenter = function (map, localizacion) {
        var centro;
        if (!localizacion)
            centro = new google.maps.LatLng(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* AppSettings */].defaultCenter.lat, __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* AppSettings */].defaultCenter.lng);
        else
            centro = new google.maps.LatLng(localizacion.latitud, localizacion.longitud);
        map.setCenter(centro);
    };
    MapaProviderFake.prototype.setLongPressMap = function (map) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var longpress = false;
            var start = 0;
            var end = 0;
            google.maps.event.addListener(map, 'click', function (event) {
                if (longpress) {
                    var loc = new __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */](event.latLng.lat(), event.latLng.lng());
                    observer.next(loc);
                }
            });
            google.maps.event.addListener(map, 'mousedown', function (_event) {
                start = new Date().getTime();
            });
            google.maps.event.addListener(map, 'mouseup', function (_event) {
                end = new Date().getTime();
                longpress = (end - start < 500) ? false : true;
            });
        });
    };
    MapaProviderFake.prototype.setDraggable = function (marker) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            var loc = new __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */](marker.getPosition().lat(), marker.getPosition().lng());
            _this.drag.next(loc);
        });
    };
    MapaProviderFake.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
    };
    MapaProviderFake = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], MapaProviderFake);
    return MapaProviderFake;
}());

//# sourceMappingURL=mapa.provider.fake.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_mocks_splash_screen__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_mocks_status_bar__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_mocks_social_sharing__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_cordova_empty_provider__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cordova_cordova_provider__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Sin Mock




var isWeb = __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].appType != 'cordova';
var isCordovaMockable = __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].appType == 'cordova' && !__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realCordova;
var CordovaProviderModule = /** @class */ (function () {
    function CordovaProviderModule() {
    }
    CordovaProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_11__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */] : __WEBPACK_IMPORTED_MODULE_6__ionic_native_mocks_splash_screen__["a" /* SplashScreenMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_11__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] : __WEBPACK_IMPORTED_MODULE_7__ionic_native_mocks_status_bar__["a" /* StatusBarMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_11__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */] : __WEBPACK_IMPORTED_MODULE_8__ionic_native_mocks_social_sharing__["a" /* SocialSharingMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__["a" /* Globalization */],
                    useClass: __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__["a" /* Globalization */]
                },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_12__providers_cordova_cordova_provider__["a" /* CordovaProvider */]
            ]
        })
    ], CordovaProviderModule);
    return CordovaProviderModule;
}());

//# sourceMappingURL=cordova.provider.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmptyProvider = /** @class */ (function () {
    function EmptyProvider() {
    }
    EmptyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], EmptyProvider);
    return EmptyProvider;
}());

//# sourceMappingURL=empty.provider.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroresProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_errores_errores_provider_interface__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_errores_errores_provider__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_errores_errores_provider_fake__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ErroresProviderModule = /** @class */ (function () {
    function ErroresProviderModule() {
    }
    ErroresProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__providers_errores_errores_provider_interface__["a" /* IErroresProvider */], useClass: __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realServer ? __WEBPACK_IMPORTED_MODULE_3__providers_errores_errores_provider__["a" /* ErroresProvider */] : __WEBPACK_IMPORTED_MODULE_4__providers_errores_errores_provider_fake__["a" /* ErroresProviderFake */] }
            ]
        })
    ], ErroresProviderModule);
    return ErroresProviderModule;
}());

//# sourceMappingURL=errores.provider.module.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_errores_errores_provider_interface__ = __webpack_require__(93);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErroresProvider = /** @class */ (function (_super) {
    __extends(ErroresProvider, _super);
    function ErroresProvider() {
        return _super.call(this) || this;
    }
    ErroresProvider.prototype.addError = function (error) {
        error = error;
    };
    ErroresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErroresProvider);
    return ErroresProvider;
}(__WEBPACK_IMPORTED_MODULE_1__providers_errores_errores_provider_interface__["a" /* IErroresProvider */]));

//# sourceMappingURL=errores.provider.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroresProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_errores_errores_provider_interface__ = __webpack_require__(93);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErroresProviderFake = /** @class */ (function (_super) {
    __extends(ErroresProviderFake, _super);
    function ErroresProviderFake() {
        var _this = _super.call(this) || this;
        _this.urlErrores = '/errores';
        return _this;
    }
    ErroresProviderFake.prototype.addError = function (error) {
        error = error;
    };
    ErroresProviderFake = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErroresProviderFake);
    return ErroresProviderFake;
}(__WEBPACK_IMPORTED_MODULE_1__providers_errores_errores_provider_interface__["a" /* IErroresProvider */]));

//# sourceMappingURL=errores.provider.fake.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__correos_provider_interface__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__correos_provider__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__correos_provider_fake__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CorreosProviderModule = /** @class */ (function () {
    function CorreosProviderModule() {
    }
    CorreosProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__correos_provider_interface__["a" /* ICorreosProvider */], useClass: __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realServer ? __WEBPACK_IMPORTED_MODULE_3__correos_provider__["a" /* CorreosProvider */] : __WEBPACK_IMPORTED_MODULE_4__correos_provider_fake__["a" /* CorreosProviderFake */] }
            ]
        })
    ], CorreosProviderModule);
    return CorreosProviderModule;
}());

//# sourceMappingURL=correos.provider.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__correos_provider_interface__ = __webpack_require__(86);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorreosProvider = /** @class */ (function (_super) {
    __extends(CorreosProvider, _super);
    function CorreosProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CorreosProvider.prototype.mandarCorreo = function (correo) {
        var url = 'https://772bxqhxu9.execute-api.eu-west-2.amazonaws.com/prod/email';
        return this.http
            .config()
            .post(url, JSON.stringify(correo));
    };
    CorreosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CorreosProvider);
    return CorreosProvider;
}(__WEBPACK_IMPORTED_MODULE_2__correos_provider_interface__["a" /* ICorreosProvider */]));

//# sourceMappingURL=correos.provider.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__correos_provider_interface__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorreosProviderFake = /** @class */ (function (_super) {
    __extends(CorreosProviderFake, _super);
    function CorreosProviderFake(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CorreosProviderFake.prototype.mandarCorreo = function (_correo) {
        var url = 'https://772bxqhxu9.execute-api.eu-west-2.amazonaws.com/prod/email';
        return this.http
            .config()
            .get(url);
    };
    CorreosProviderFake = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CorreosProviderFake);
    return CorreosProviderFake;
}(__WEBPACK_IMPORTED_MODULE_1__correos_provider_interface__["a" /* ICorreosProvider */]));

//# sourceMappingURL=correos.provider.fake.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export extract */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_globalization__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger_service__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_eu_json__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_eu_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations_eu_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var log = new __WEBPACK_IMPORTED_MODULE_3__logger_logger_service__["a" /* Logger */]('I18nService');
var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
function extract(s) {
    return s;
}
var I18nService = /** @class */ (function () {
    function I18nService(translateService, globalization) {
        this.translateService = translateService;
        this.globalization = globalization;
        this.repairEmptyTranslations(__WEBPACK_IMPORTED_MODULE_4__translations_eu_json__);
        this.translateService.setTranslation('eu', __WEBPACK_IMPORTED_MODULE_4__translations_eu_json__);
    }
    I18nService.prototype.init = function () {
        var _this = this;
        this.defaultLanguage = 'es';
        this.supportedLanguages = ['es', 'eu'];
        this.supportedLanguagesLiterales = {
            'es': 'Castellano',
            'eu': 'Euskera'
        };
        var langSaved = localStorage.getItem(languageKey);
        if (langSaved == 'eu')
            this.setLanguage('eu');
        else {
            this.globalization.getPreferredLanguage()
                .then(function (languageDevice) {
                _this.setLanguage(languageDevice.value.substring(0, 2));
            })
                .catch(function () {
                _this.setLanguage('es');
            });
        }
        this.translateService.onLangChange.subscribe(function (event) {
            localStorage.setItem(languageKey, event.lang);
        });
    };
    I18nService.prototype.setLanguage = function (language) {
        language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
        var isSupportedLanguage = this.supportedLanguages.indexOf(language) != -1;
        // If no exact match is found, search without the region
        if (language && !isSupportedLanguage) {
            language = language.split('-')[0];
            language = this.supportedLanguages.find(function (supportedLanguage) { return supportedLanguage.startsWith(language); }) || '';
            isSupportedLanguage = Boolean(language);
        }
        // Fallback if language is not supported
        if (!isSupportedLanguage) {
            language = 'es';
        }
        log.debug("Language set to " + language);
        this.translateService.use(language);
    };
    I18nService.prototype.getCurrentLanguage = function () {
        return this.translateService.currentLang;
    };
    I18nService.prototype.getLanguageLiteral = function (language) {
        return this.supportedLanguagesLiterales[language];
    };
    I18nService.prototype.getLanguageLiterals = function () {
        var literals = [];
        for (var lang in this.supportedLanguagesLiterales) {
            literals.push(this.supportedLanguagesLiterales[lang]);
        }
        return literals;
    };
    I18nService.prototype.getCurrentLanguageLiteral = function () {
        return this.supportedLanguagesLiterales[this.translateService.currentLang];
    };
    I18nService.prototype.addTranslations = function (language, translations) {
        this.translateService.setTranslation(language, translations, true);
    };
    I18nService.prototype.addTranslationsByLangKey = function (textoObj) {
        for (var prefix in textoObj) {
            var translations = {};
            if (this.supportedLanguages.indexOf(prefix) != -1) {
                translations[textoObj[this.defaultLanguage]] = textoObj[prefix];
                this.translateService.setTranslation(prefix, translations, true);
            }
        }
    };
    I18nService.prototype.instant = function (key) {
        if (key == '' || key == undefined)
            return key;
        return this.translateService.instant(key);
    };
    I18nService.prototype.get = function (key) {
        return this.translateService.get(key);
    };
    I18nService.prototype.getInstantKey = function (key) {
        return __WEBPACK_IMPORTED_MODULE_4__translations_eu_json__[key];
    };
    I18nService.prototype.translateStatusError = function (mensaje) {
        // Algunos mensajes vienen con un texto extra variable
        var posicionExtra = mensaje.indexOf('<br');
        if (posicionExtra > 0) {
            var mensajeES = mensaje.substring(0, posicionExtra); // ojo!, no incluye el caracter en posicionExtra
            var mensajeExtra = mensaje.substring(posicionExtra);
            return this.instant(mensajeES) + mensajeExtra;
        }
        else {
            return this.instant(mensaje);
        }
    };
    I18nService.prototype.repairEmptyTranslations = function (eu) {
        for (var key in eu) {
            if (!eu[key])
                eu[key] = key;
        }
    };
    I18nService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_globalization__["a" /* Globalization */]])
    ], I18nService);
    return I18nService;
}());

//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvSettings; });
var EnvSettings = {
    realCordova: false,
    realServer: false,
    appType: 'cordova',
    api: 'http://localhost:4000/api',
    vbasepath: '',
    //0.- Off, 1.- JS errors, 2.- Http errors, 3.- All errors
    logLevel: 0,
    version: '',
    cordova: {
        finalBuild: false
    },
    firebaseConfig: {
        apiKey: 'AIzaSyBE_r5SN5kl-Dvr5DkxGbWWyGG5EC-mm0k',
        authDomain: 'cukisara-795b8.firebaseapp.com',
        databaseURL: 'https://cukisara-795b8.firebaseio.com/ ',
        projectId: 'cukisara-795b8',
        storageBucket: 'gs://cukisara-795b8.appspot.com'
    }
};
//# sourceMappingURL=environment.cordova.dev.fake.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakpointProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreakpointProvider = /** @class */ (function () {
    function BreakpointProvider() {
        this.isXSObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.isXS());
        this.isTabletObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.isTablet());
        this.isXS$ = this.isXSObs.asObservable();
        this.isTablet$ = this.isTabletObs.asObservable();
        this.setBreakpoint();
        window.onresize = function () {
            this.setBreakpoint();
        }.bind(this);
    }
    BreakpointProvider.prototype.setBreakpoint = function () {
        var newBreakpoint = this.getBreakpoint();
        if (newBreakpoint == 'xs' && this.breakpoint != 'xs') {
            this.isXSObs.next(true);
        }
        else if (newBreakpoint != 'xs' && this.breakpoint == 'xs') {
            this.isXSObs.next(false);
            if (newBreakpoint == 'sm') {
                this.isTabletObs.next(true);
            }
        }
        this.breakpoint = newBreakpoint;
    };
    BreakpointProvider.prototype.getBreakpoint = function () {
        var windowWidth = window.innerWidth;
        var breakpoint;
        if (windowWidth < 768) {
            breakpoint = 'xs';
        }
        else if (windowWidth < 992) {
            breakpoint = 'sm';
        }
        else if (windowWidth < 1200) {
            breakpoint = 'md';
        }
        else {
            breakpoint = 'lg';
        }
        return breakpoint;
    };
    BreakpointProvider.prototype.isXS = function () {
        var breakpoint = this.getBreakpoint();
        if (breakpoint == 'xs') {
            return true;
        }
        return false;
    };
    BreakpointProvider.prototype.isTablet = function () {
        var breakpoint = this.getBreakpoint();
        if (breakpoint == 'sm') {
            return true;
        }
        return false;
    };
    BreakpointProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BreakpointProvider);
    return BreakpointProvider;
}());

//# sourceMappingURL=breakpoint.provider.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnvProvider = /** @class */ (function () {
    function EnvProvider() {
        this.pathname = window.location.pathname;
    }
    EnvProvider.prototype.getBasePath = function (index) {
        if (index === void 0) { index = false; }
        if (index) {
            return this.pathname;
        }
        else {
            return this.pathname.replace('index.html', '');
        }
    };
    EnvProvider.prototype.getApiUrl = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realCordova && __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realServer && window.location.hostname === 'localhost') {
            return window.location.protocol + '//' + window.location.hostname + __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].vbasepath;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realCordova) {
            return '';
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].api;
        }
    };
    EnvProvider.prototype.isCordova = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].appType == 'cordova';
    };
    EnvProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EnvProvider);
    return EnvProvider;
}());

//# sourceMappingURL=env.provider.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_gallery__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImageGalleryComponentModule = /** @class */ (function () {
    function ImageGalleryComponentModule() {
    }
    ImageGalleryComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery__["a" /* ImageGalleryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery__["a" /* ImageGalleryComponent */]
            ]
        })
    ], ImageGalleryComponentModule);
    return ImageGalleryComponentModule;
}());

//# sourceMappingURL=image-gallery.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICorreosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ICorreosProvider = /** @class */ (function () {
    function ICorreosProvider() {
    }
    ICorreosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ICorreosProvider);
    return ICorreosProvider;
}());

//# sourceMappingURL=correos.provider.interface.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = {
    appTitle: 'SanJuanXar',
    appShortName: 'sanjuanxar',
    defaultCenter: {
        lat: 42.348393,
        lng: -1.650687
    },
    comoLlegar: 'https://www.google.com/maps/dir/&quot;Current+Location&quot;/{latitud},{longitud}',
    toastDuration: 4000,
    httpConfig: {
        timeout: 60000,
        shortTimeout: 5000
    },
    cacheStorage: {
        ttl: 60 * 60 * 24 * 365 // 1 año de expiración
    },
    status: {
        unauthorized: 401,
        forbidden: 403,
        conflict: 409,
        notAllowed: 405 // Para evitar peticiones cuando la aplicación está gestinando el cierre automatico
    },
    roles: {},
    preventMaxRequests: 10,
    timeIdle: 600,
    timeTimeout: 30,
    keepInterval: 2,
    errorInterval: 30000 // 30 segs (ms),
};
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stacktrace_js__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stacktrace_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stacktrace_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_errores_errores_provider_interface__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoggingProvider = /** @class */ (function () {
    function LoggingProvider(injector) {
        this.injector = injector;
        this.urlLogError = 'api/erroresFrontend';
        this.timestampLastLog = 0;
    }
    LoggingProvider.prototype.logJsError = function (error) {
        if (__WEBPACK_IMPORTED_MODULE_4__environment__["a" /* EnvSettings */].logLevel == 1 || __WEBPACK_IMPORTED_MODULE_4__environment__["a" /* EnvSettings */].logLevel == 3) {
            var errorProvider_1 = this.injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_errores_errores_provider_interface__["a" /* IErroresProvider */]);
            if (this.timestampLastLog && (Date.now() - this.timestampLastLog) < __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* AppSettings */].errorInterval) {
                return;
            }
            this.timestampLastLog = Date.now();
            try {
                var deviceService_1 = this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__["DeviceDetectorService"]);
                var stactraceOpts = { offline: true };
                __WEBPACK_IMPORTED_MODULE_2_stacktrace_js__["fromError"](error, stactraceOpts)
                    .then(function (stackframes) {
                    var stackTrace = stackframes
                        .splice(0, 20)
                        .map(function (sf) {
                        return sf.toString();
                    }).join('\n').replace('"', '\'');
                    var deviceInfo = deviceService_1.getDeviceInfo();
                    var errorData = {
                        stackTrace: JSON.stringify(stackTrace),
                        errorMessage: error.toString(),
                        errorDevice: JSON.stringify(deviceInfo),
                        cause: error.message ? error.message : error.toString(),
                        errorUrl: window.location.href,
                    };
                    errorProvider_1.addError(errorData);
                })
                    .catch(function (err) { return console.error('error en fromError: ' + err); });
            }
            catch (logJsEx) {
                console.error('Error al guardar un error Javascript');
                console.error(logJsEx);
            }
        }
    };
    LoggingProvider.prototype.logHttpError = function (error) {
        if (__WEBPACK_IMPORTED_MODULE_4__environment__["a" /* EnvSettings */].logLevel == 2 || __WEBPACK_IMPORTED_MODULE_4__environment__["a" /* EnvSettings */].logLevel == 3) {
            var errorProvider = this.injector.get(__WEBPACK_IMPORTED_MODULE_5__providers_errores_errores_provider_interface__["a" /* IErroresProvider */]);
            try {
                var deviceService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__["DeviceDetectorService"]);
                var deviceInfo = deviceService.getDeviceInfo();
                var errorData = {
                    stackTrace: JSON.stringify(error),
                    errorMessage: error.toString(),
                    errorDevice: JSON.stringify(deviceInfo),
                    cause: error.status ? error.status.toString() : 'Unknow httpError',
                    errorUrl: '',
                };
                errorProvider.addError(errorData);
            }
            catch (logHttpEx) {
                console.error('Error al guardar un error Http');
                console.error(logHttpEx);
            }
        }
    };
    LoggingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], LoggingProvider);
    return LoggingProvider;
}());

//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IErroresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IErroresProvider = /** @class */ (function () {
    function IErroresProvider() {
    }
    IErroresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IErroresProvider);
    return IErroresProvider;
}());

//# sourceMappingURL=errores.provider.interface.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map