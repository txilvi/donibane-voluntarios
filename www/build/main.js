webpackJsonp([1],{

/***/ 101:
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IUsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IUsuarioProvider = /** @class */ (function () {
    function IUsuarioProvider() {
    }
    IUsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IUsuarioProvider);
    return IUsuarioProvider;
}());

//# sourceMappingURL=usuarios.provider.interface.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Localizacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Marcador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SugerenciaDireccion; });
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IExcursionesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IExcursionesProvider = /** @class */ (function () {
    function IExcursionesProvider() {
    }
    IExcursionesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IExcursionesProvider);
    return IExcursionesProvider;
}());

//# sourceMappingURL=excursiones.provider.interface.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_device_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stacktrace_js__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stacktrace_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stacktrace_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_errores_errores_provider_interface__ = __webpack_require__(120);
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

/***/ 120:
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

/***/ }),

/***/ 163:
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakpointProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(75);
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

/***/ 171:
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

/***/ 222:
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
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ayuda/ayuda.module": [
		266
	],
	"../pages/contacto/contacto.module": [
		307
	],
	"../pages/galeria/galeria.module": [
		785
	],
	"../pages/home/home.module": [
		308
	],
	"../pages/mapa/mapa.module": [
		310
	],
	"../pages/que-hacemos/que-hacemos.module": [
		316
	],
	"../pages/voluntarios/voluntarios.module": [
		318
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
webpackAsyncContext.id = 265;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaModule", function() { return AyudaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ayuda__ = __webpack_require__(592);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__ayuda__["a" /* AyudaPage */]),
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__ = __webpack_require__(170);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_model__ = __webpack_require__(499);
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

/***/ 290:
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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoModule", function() { return ContactoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacto__ = __webpack_require__(593);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__contacto__["a" /* ContactoPage */]),
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(309);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]),
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios_provider_interface__ = __webpack_require__(102);
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
    function HomePage(usuarioProvider, navCtrl) {
        this.usuarioProvider = usuarioProvider;
        this.navCtrl = navCtrl;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadInformacion();
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    HomePage.prototype.loadInformacion = function () {
        var _this = this;
        this.subscriptions.add(this.usuarioProvider.getUsuarioById('1').subscribe(function (usuario) {
            _this.usuario = usuario;
        }, function (err) {
            _this.errorMessage = 'En este momento no se pueden recuperar las actividades.' + err;
        }));
    };
    HomePage.prototype.goPage = function (page, options) {
        this.navCtrl.push(page, options, { animate: false });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\home\home.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div translate class="custom-container descripcion">\n\n        <span translate>\n\n            Desde el\n\n        </span>\n\n        <span class="destacado" translate>\n\n            Pacto por la Persona Mayor\n\n        </span>\n\n        <span translate>\n\n            y\n\n        </span>\n\n        <span class="destacado" translate>\n\n            Maratxa\n\n        </span>\n\n        <span translate>\n\n            estamos creando una red de\n\n        </span>\n\n        <span class="destacado" translate>\n\n            voluntari@s\n\n        </span>\n\n        <span translate>\n\n            para ayudar a las personas que lo necesitéis.\n\n        </span>\n\n        <div class="lnk-wrapper">\n\n            <a class="lnk-haciendo" (click)="goPage(\'QueHacemosPage\')">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/ayuda.png" />\n\n                <span translate>¿Qué estamos haciendo?</span>\n\n            </a>\n\n        </div>\n\n    </div>\n\n    <div class="usuario">\n\n        <div class="img-usuario-wrapper">\n\n            <img class="img-ayuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n        </div>\n\n        <div class="btn-usuario-wrapper">\n\n            <button type="button" ion-button class="c-btn btn-usuario" (click)="goPage(\'AyudaPage\')">\n\n                <span translate>Necesito ayuda</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n    <div class="usuario">\n\n        <div class="img-usuario-wrapper">\n\n            <img alt="icono-voluntaria" src="assets/imgs/usuarios/voluntarios.png" />\n\n        </div>\n\n        <div class="btn-usuario-wrapper">\n\n            <button type="button" ion-button class="c-btn btn-usuario" (click)="goPage(\'VoluntariosPage\')">\n\n                <span translate>Quiero ser voluntari@</span>\n\n            </button>\n\n        </div>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios_provider_interface__["a" /* IUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaActividadModule", function() { return MapaActividadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mapa_mapa_module__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapa__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapaActividadModule = /** @class */ (function () {
    function MapaActividadModule() {
    }
    MapaActividadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__mapa__["a" /* MapaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__mapa__["a" /* MapaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_mapa_mapa_module__["a" /* MapaModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_custom_header_custom_header_module__["a" /* CustomHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], MapaActividadModule);
    return MapaActividadModule;
}());

//# sourceMappingURL=mapa.module.js.map

/***/ }),

/***/ 312:
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_i18n_i18n_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils_utils__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_social_provider__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapaHelper = /** @class */ (function () {
    function MapaHelper(socialProvider) {
        this.socialProvider = socialProvider;
    }
    MapaHelper.prototype.createInfoWindowExcursion = function (excursion) {
        var _this = this;
        var dist = '';
        if (excursion.distanciaUsuario) {
            var desdeTuUbicacion = Object(__WEBPACK_IMPORTED_MODULE_0__core_i18n_i18n_service__["b" /* extract */])('km desde tu ubicación');
            dist = '<div class="map-subtitle map-distancia">' + '(' + excursion.distanciaUsuario + ' ' + desdeTuUbicacion + ' )' + '</div>';
        }
        //Principal element
        var principalElement = document.createElement('div');
        principalElement.className = 'map-infoWindow';
        //Row nombre y dist
        var nombreDist = '<div class="map-title map-nombre">' + excursion.name + '</div>' + dist;
        var nombreDistElement = document.createElement('div');
        nombreDistElement.className = 'map-heading';
        nombreDistElement.innerHTML = nombreDist;
        principalElement.appendChild(nombreDistElement);
        //Direccion
        var direccion = excursion.extendedData.data.find(function (d) { return d.name == 'direccion'; });
        if (direccion && direccion.value.trim() != '') {
            var dir = '<div class="map-label"> Dirección </div>' + '<div class="map-value map-direccion">' + __WEBPACK_IMPORTED_MODULE_1__shared_utils_utils__["a" /* Utils */].htmlDecode(direccion.value) + '</div>';
            var dirElement = document.createElement('div');
            dirElement.className = 'map-row';
            dirElement.innerHTML = dir;
            principalElement.appendChild(dirElement);
        }
        //Descripción
        var descripcion = excursion.extendedData.data.find(function (d) { return d.name == 'descripcion'; });
        if (descripcion && descripcion.value.trim() != '') {
            var dir = '<div class="map-label"> Descripción </div>' + '<div class="map-value map-direccion">' + __WEBPACK_IMPORTED_MODULE_1__shared_utils_utils__["a" /* Utils */].htmlDecode(descripcion.value) + '</div>';
            var dirElement = document.createElement('div');
            dirElement.className = 'map-row';
            dirElement.innerHTML = dir;
            principalElement.appendChild(dirElement);
        }
        //Botones
        var botElement = document.createElement('div');
        botElement.className = 'map-row';
        //Boton compartir
        var buttonCompartir = document.createElement('div');
        buttonCompartir.className = 'map-button-share';
        buttonCompartir.innerHTML = '<div class="card-secondary-button rounded-icon"> ' + '<div class="map-share icon"> </div><span class="text">Compartir</span> ' + '</div>';
        buttonCompartir.addEventListener('click', function () {
            _this.socialProvider.regularShare('Cukis me voy de excursión a ' + excursion.name);
        });
        //Boton como llegar
        var buttonComollegar = document.createElement('button');
        buttonComollegar.className = 'map-button-llegar button button-md button-default button-default-md button-md-light';
        buttonComollegar.innerHTML = '<span class="button-inner"> ' + '<div class="icon map-pin"> </div>&nbsp;Cómo llegar' + '</span>';
        buttonComollegar.addEventListener('click', function () {
            console.log('buttonComollegar');
        });
        botElement.appendChild(buttonCompartir);
        botElement.appendChild(buttonComollegar);
        principalElement.appendChild(botElement);
        return principalElement;
    };
    MapaHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_providers_social_provider__["a" /* SocialProvider */]])
    ], MapaHelper);
    return MapaHelper;
}());

//# sourceMappingURL=mapa.helper.js.map

/***/ }),

/***/ 314:
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

/***/ 315:
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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueHacemosModule", function() { return QueHacemosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__que_hacemos__ = __webpack_require__(317);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__que_hacemos__["a" /* QueHacemosPage */]),
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueHacemosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(13);
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
            selector: 'que-hacemos-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\que-hacemos\que-hacemos.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion scoll-content">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/ayuda.png" />\n\n                <span translate>¿Qué estamos haciendo?</span>\n\n            </div>\n\n        </div>\n\n        <p>\n\n            <span translate>\n\n                Desde el\n\n            </span>\n\n            <span class="destacado" translate>\n\n                Pacto por la Persona Mayor\n\n            </span>\n\n            <span translate>\n\n                y\n\n            </span>\n\n            <span class="destacado" translate>\n\n                Maratxa\n\n            </span>\n\n            <span translate>\n\n                queremos trasladar un mensaje de tranquilidad, responsabilidad y solidaridad.\n\n            </span>\n\n        </p>\n\n        <p>\n\n            <span translate>\n\n                Es un momento difícil, pero el COVID-19 puede sacar lo mejor de las personas y lo más auténtico de un barrio: </span>\n\n            <span class="destacado" translate>\n\n                solidaridad, participación y la implicación en construir entre tod@s un San Juan mejor.\n\n            </span>\n\n        </p>\n\n        <p>\n\n            <span translate>\n\n                Es por eso, que\n\n            </span>\n\n            <span class="destacado" translate>\n\n                estamos creando una red de voluntari@s\n\n            </span>\n\n            <span translate>\n\n                para ayudar a las personas que así lo necesitéis. Porque lo primero, son las personas.\n\n            </span>\n\n        </p>\n\n\n\n        <div class="cuenta-usuarios">\n\n            <div class="usuario">\n\n                <div class="img-usuario-wrapper">\n\n                    <img class="img-ayuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n                </div>\n\n                <div class="numero">\n\n                    <div class="destacado" translate>Más de 100</div>\n\n                    <div class="destacado" translate>personas atendidas</div>\n\n                </div>\n\n            </div>\n\n            <div class="usuario">\n\n                <div class="img-usuario-wrapper">\n\n                    <img alt="icono-voluntaria" src="assets/imgs/usuarios/voluntarios.png" />\n\n                </div>\n\n                <div class="numero">\n\n                    <div class="destacado" translate>88</div>\n\n                    <div class="destacado" translate>voluntari@s</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="lnk-gallery">\n\n            <a class="lnk-haciendo" (click)="goPage(\'GaleriaPage\')">\n\n                <img alt="icono-galeria" src="assets/imgs/icons/galeria.png" />\n\n                <span translate>Ver imágenes</span>\n\n            </a>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<footer></footer>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\que-hacemos\que-hacemos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object])
    ], QueHacemosPage);
    return QueHacemosPage;
    var _a, _b;
}());

//# sourceMappingURL=que-hacemos.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntariosModule", function() { return VoluntariosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voluntarios__ = __webpack_require__(599);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__voluntarios__["a" /* VoluntariosPage */]),
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(208);
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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorNotifierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging_logging_service__ = __webpack_require__(119);
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

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpSchemaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv__ = __webpack_require__(717);
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

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_cache__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_page_transitions__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_hockeyapp__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_hockeyapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ionic_hockeyapp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_locales_es__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_locales_eu__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_app_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_core_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_i18n_i18n_missing_handler__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_geolocalizacion_geolocalizacion_provider_module__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_usuarios_usuarios_provider_module__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_cordova_cordova_provider_module__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_excursiones_excursiones_provider_module__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_errores_errores_provider_module__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_correos_correos_provider_module__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mapa_mapa_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_home_home_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_que_hacemos_que_hacemos_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_voluntarios_voluntarios_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_ayuda_ayuda_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_contacto_contacto_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_galeria_galeria_module__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//Providers







//Pages







Object(__WEBPACK_IMPORTED_MODULE_19__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_12__angular_common_locales_es__["a" /* default */]);
Object(__WEBPACK_IMPORTED_MODULE_19__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_13__angular_common_locales_eu__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_app_component__["a" /* SanJuanXarApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    missingTranslationHandler: { provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_16__core_i18n_i18n_missing_handler__["a" /* MyMissingTranslationHandler */] },
                    useDefaultLang: false
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_app_component__["a" /* SanJuanXarApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacto/contacto.module#ContactoModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaActividadModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/que-hacemos/que-hacemos.module#QueHacemosModule', name: 'QueHacemosPage', segment: 'que-hacemos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/voluntarios/voluntarios.module#VoluntariosModule', name: 'VoluntariosPage', segment: 'voluntarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeria/galeria.module#GaleriaModule', name: 'GaleriaPage', segment: 'galeria', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__environment__["a" /* EnvSettings */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_cache__["a" /* CacheModule */].forRoot({ keyPrefix: 'maestras' }),
                __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_que_hacemos_que_hacemos_module__["QueHacemosModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_ayuda_ayuda_module__["AyudaModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_voluntarios_voluntarios_module__["VoluntariosModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_contacto_contacto_module__["ContactoModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_galeria_galeria_module__["GaleriaModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_mapa_mapa_module__["MapaActividadModule"],
                __WEBPACK_IMPORTED_MODULE_25__providers_correos_correos_provider_module__["a" /* CorreosProviderModule */],
                __WEBPACK_IMPORTED_MODULE_21__providers_usuarios_usuarios_provider_module__["a" /* UsuarioProviderModule */],
                __WEBPACK_IMPORTED_MODULE_23__providers_excursiones_excursiones_provider_module__["a" /* ExcursionesProviderModule */],
                __WEBPACK_IMPORTED_MODULE_20__providers_geolocalizacion_geolocalizacion_provider_module__["a" /* GeoLocalizacionProviderModule */],
                __WEBPACK_IMPORTED_MODULE_24__providers_errores_errores_provider_module__["a" /* ErroresProviderModule */],
                __WEBPACK_IMPORTED_MODULE_22__providers_cordova_cordova_provider_module__["a" /* CordovaProviderModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_app_component__["a" /* SanJuanXarApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_hockeyapp__["HockeyApp"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_i18n_missing_handler__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_ts_spinner__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_limit_to_directive__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_pass_check_directive__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_retina_image_directive__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_fixed_nav_directive__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_stop_propagation_directive__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_custom_min_validator_directive__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_custom_max_validator_directive__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_decimals_input_directive__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_fixed_element_directive__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_transition_page_directive__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_key_event_directive__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_keep_html_pipe__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_limit_to_pipe__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_search_pipe__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_start_from_array_pipe__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_remove_final_spaces_pipe__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_safe_url_pipe__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_is_not_empty_object_pipe__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_nombre_sexo_pipe__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_group_by_pipe__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_highlight_pipe__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_custom_date_pipe__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_breakpoint_provider__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_print_provider__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_social_provider__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_cache_provider__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_keyboard_provider__ = __webpack_require__(500);
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
                __WEBPACK_IMPORTED_MODULE_17__pipes_limit_to_pipe__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_nombre_sexo_pipe__["a" /* NombreSexoPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_start_from_array_pipe__["a" /* StartFromArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_remove_final_spaces_pipe__["a" /* RemoveFinalSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_is_not_empty_object_pipe__["a" /* IsNotEmptyObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_highlight_pipe__["a" /* HighlightPipe */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_custom_date_pipe__["a" /* CustomDatePipe */],
                __WEBPACK_IMPORTED_MODULE_27__providers_breakpoint_provider__["a" /* BreakpointProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_print_provider__["a" /* PrintProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_social_provider__["a" /* SocialProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_cache_provider__["a" /* CacheProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_keyboard_provider__["a" /* KeyboardProvider */]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    missingTranslationHandler: { provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__core_i18n_i18n_missing_handler__["a" /* MyMissingTranslationHandler */] },
                    useDefaultLang: false
                }),
                __WEBPACK_IMPORTED_MODULE_4_ng_ts_spinner__["a" /* NgTsSpinnerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__pipes_limit_to_pipe__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_start_from_array_pipe__["a" /* StartFromArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_remove_final_spaces_pipe__["a" /* RemoveFinalSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_nombre_sexo_pipe__["a" /* NombreSexoPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_keep_html_pipe__["a" /* EscapeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_highlight_pipe__["a" /* HighlightPipe */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_custom_date_pipe__["a" /* CustomDatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__directives_limit_to_directive__["a" /* LimitToDirective */],
                __WEBPACK_IMPORTED_MODULE_6__directives_pass_check_directive__["a" /* PassCheckDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_fixed_nav_directive__["a" /* FixedNavDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_fixed_element_directive__["a" /* FixedElementDirective */],
                __WEBPACK_IMPORTED_MODULE_9__directives_stop_propagation_directive__["a" /* ClickStopPropagation */],
                __WEBPACK_IMPORTED_MODULE_7__directives_retina_image_directive__["a" /* NgRetina */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_is_not_empty_object_pipe__["a" /* IsNotEmptyObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_10__directives_custom_min_validator_directive__["a" /* CustomMinDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_custom_max_validator_directive__["a" /* CustomMaxDirective */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_12__directives_decimals_input_directive__["a" /* DecimalsInputDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_transition_page_directive__["a" /* TransitionPageDirective */],
                __WEBPACK_IMPORTED_MODULE_15__directives_key_event_directive__["a" /* KeyEventDirective */]
            ],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_16__pipes_keep_html_pipe__["a" /* EscapeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_limit_to_pipe__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_nombre_sexo_pipe__["a" /* NombreSexoPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_start_from_array_pipe__["a" /* StartFromArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_remove_final_spaces_pipe__["a" /* RemoveFinalSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_is_not_empty_object_pipe__["a" /* IsNotEmptyObjectPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_highlight_pipe__["a" /* HighlightPipe */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_custom_date_pipe__["a" /* CustomDatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__directives_limit_to_directive__["a" /* LimitToDirective */],
                __WEBPACK_IMPORTED_MODULE_6__directives_pass_check_directive__["a" /* PassCheckDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_fixed_nav_directive__["a" /* FixedNavDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_fixed_element_directive__["a" /* FixedElementDirective */],
                __WEBPACK_IMPORTED_MODULE_9__directives_stop_propagation_directive__["a" /* ClickStopPropagation */],
                __WEBPACK_IMPORTED_MODULE_7__directives_retina_image_directive__["a" /* NgRetina */],
                __WEBPACK_IMPORTED_MODULE_10__directives_custom_min_validator_directive__["a" /* CustomMinDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_custom_max_validator_directive__["a" /* CustomMaxDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_decimals_input_directive__["a" /* DecimalsInputDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_transition_page_directive__["a" /* TransitionPageDirective */],
                __WEBPACK_IMPORTED_MODULE_15__directives_key_event_directive__["a" /* KeyEventDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 460:
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

/***/ 461:
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgRetina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_i18n_service__ = __webpack_require__(54);
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

/***/ 468:
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

/***/ 469:
/***/ (function(module, exports) {

module.exports = {"88":"","CUIDA A TUS VECIN@S":"ELKAR ZAINDUZ","¿Qué estamos haciendo?":"Zer egiten ari gara?","Necesito ayuda":"Laguntza behar dut","Quiero ser voluntari@":"Boluntario izan nahi dut","Se ha producido un error al cargar el mapa":"","km desde tu ubicación":"","Cuida a tus vecinos":"","Haz barrio":"Donibane eraiki","Desde el":"","Pacto por la Persona Mayor":"","y":"","Maratxa":"","queremos trasladar un mensaje de tranquilidad, responsabilidad y solidaridad.":"","Es un momento difícil, pero el COVID-19 puede sacar lo mejor de las personas y lo más auténtico de un barrio:":"","solidaridad, participación y la implicación en construir entre tod@s un San Juan mejor.":"","Es por eso, que":"","estamos creando una red de voluntari@s":"","para ayudar a las personas que así lo necesitéis. Porque lo primero, son las personas.":"","Más de 100":"","personas atendidas":"","voluntari@s":"","estamos creando una red de":"","para ayudar a las personas que lo necesitéis.":""}

/***/ }),

/***/ 47:
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

/***/ 470:
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

/***/ 471:
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMinDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
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

/***/ 474:
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

/***/ 475:
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

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransitionPageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(477);
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

/***/ 485:
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

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
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

/***/ 487:
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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_i18n_i18n_service__ = __webpack_require__(54);
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

/***/ 489:
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

/***/ 490:
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
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

/***/ 492:
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

/***/ 493:
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

/***/ 494:
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

/***/ 495:
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

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
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

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_printer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_env_provider__ = __webpack_require__(76);
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




var PrintProvider = /** @class */ (function () {
    function PrintProvider(printer, envProvider, document) {
        this.printer = printer;
        this.envProvider = envProvider;
        this.document = document;
    }
    PrintProvider.prototype.print = function (documentName) {
        if (this.envProvider.isCordova()) {
            var basePath = window.cordova.file.applicationDirectory + 'www/';
            var styles = '<head><base href=\"' + basePath + '\" /><link rel=\"stylesheet\" href=\"css/styles.bundle.css\" /></head>';
            var page = this.document.getElementsByClassName('print-page')[0].outerHTML;
            var printPage = '<body class="platform-cordova">' + page + '</body>';
            var printOptions = {
                name: documentName
            };
            return this.printer.print(styles + printPage, printOptions);
        }
        else {
            return window.print();
        }
    };
    PrintProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_printer__["a" /* Printer */],
            __WEBPACK_IMPORTED_MODULE_3__env_env_provider__["a" /* EnvProvider */], Object])
    ], PrintProvider);
    return PrintProvider;
}());

//# sourceMappingURL=print.provider.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_http_http_cache_http_cache_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_global_global_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_env_provider__ = __webpack_require__(76);
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

/***/ 499:
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

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardProvider = /** @class */ (function () {
    function KeyboardProvider(keyboard) {
        this.keyboard = keyboard;
    }
    KeyboardProvider.prototype.ocultar = function () {
        this.keyboard.close();
    };
    KeyboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */]])
    ], KeyboardProvider);
    return KeyboardProvider;
}());

//# sourceMappingURL=keyboard.provider.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_i18n_i18n_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
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
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__["a" /* BreakpointProvider */]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());

//# sourceMappingURL=custom-header.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_gallery_model__ = __webpack_require__(290);
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
    function ImageGalleryComponent() {
        this.images = [];
        this.slidesPerView = 3;
        this.imagesNormalizadas = [];
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        this.setImagenes();
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
    ImageGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'image-gallery',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\image-gallery\image-gallery.html"*/'<div class="content-gallery" [ngClass]="{\'content-gallery--modal\': (slidesPerView == 1)}">\n\n    <ion-content>\n\n        <ion-slides class="image-slider" loop="false" slidesPerView="{{slidesPerView}}" pager="true">\n\n            <ion-slide *ngFor="let img of imagesNormalizadas">\n\n                <img [src]="img.thumbnail" class="thumb-img" [imageViewer]="img.ruta" />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </ion-content>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\image-gallery\image-gallery.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());

//# sourceMappingURL=image-gallery.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extract;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_globalization__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_eu_json__ = __webpack_require__(469);
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

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__ = __webpack_require__(168);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__shared_providers_breakpoint_provider__["a" /* BreakpointProvider */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(13);
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
    AyudaPage.prototype.goPage = function (page, options) {
        this.navCtrl.push(page, options, { animate: false });
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ayuda-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\ayuda\ayuda.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n                <span translate>Necesito ayuda</span>\n\n            </div>\n\n        </div>\n\n\n\n        <span translate>\n\n            Podemos ayudarte a ti o a tus familiares con\n\n        </span>\n\n        <ul>\n\n            <li translate>\n\n                Hacer la compra\n\n            </li>\n\n            <li translate>\n\n                Recoger medicación\n\n            </li>\n\n            <li translate>\n\n                Cuidar a los peques\n\n            </li>\n\n            <li translate>\n\n                Otras necesidades...\n\n            </li>\n\n        </ul>\n\n\n\n        <div class="usuario">\n\n            <div class="btn-usuario-wrapper">\n\n                <button type="button" ion-button class="c-btn btn-usuario" (click)="goPage(\'ContactoPage\')">\n\n                    <span translate>Contacta con nosotros</span>\n\n                </button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\ayuda\ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_correos_correos_provider_interface__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_correos_correos_model__ = __webpack_require__(594);
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
    function ContactoPage(formBuilder, correosProvider) {
        this.formBuilder = formBuilder;
        this.correosProvider = correosProvider;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        this.loader = null;
    }
    ContactoPage.prototype.ngOnInit = function () {
        this.formContacto = this.formBuilder.group({
            nombre: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])],
            telefono: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])],
            email: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([])],
            quenecesitas: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([])]
        });
    };
    ContactoPage.prototype.enviar = function () {
        var _this = this;
        var correo = new __WEBPACK_IMPORTED_MODULE_5__providers_correos_correos_model__["a" /* Correo */](this.formContacto.value.nombre, this.formContacto.value.telefono, this.formContacto.value.email, this.formContacto.value.quenecesitas);
        this.correosProvider.mandarCorreo(correo)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () {
            if (_this.loader)
                _this.loader.dismiss();
        }))
            .subscribe(function (res) {
            if (res == true) {
                console.log('Ok');
            }
        });
    };
    ContactoPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contacto-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\contacto\contacto.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img *ngIf="esFormularioAyuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n                <img *ngIf="!esFormularioAyuda" alt="icono-voluntario" src="assets/imgs/usuarios/voluntarios.png" />\n\n                <span translate>Contacta con nosotros</span>\n\n            </div>\n\n        </div>\n\n\n\n        <form class="ca__formulario" [formGroup]="formContacto" novalidate>\n\n            <ion-item [ngClass]="{ \'error-item\' : formContacto.controls[\'nombre\'].hasError(\'required\')}">\n\n                <ion-label stacked translate>Tu nombre *</ion-label>\n\n                <ion-input type="text" autofocus="autofocus" formControlName="nombre" value="" required>\n\n                </ion-input>\n\n            </ion-item>\n\n            <div *ngIf="(formContacto.get(\'nombre\').dirty || formContacto.get(\'nombre\').dirty)">\n\n                <div class="error" *ngIf="formContacto.controls[\'nombre\'].hasError(\'required\')" translate>\n\n                    Por favor, introduce tu nombre\n\n                </div>\n\n            </div>\n\n            <ion-item [ngClass]="{ \'error-item\' : formContacto.controls[\'nombre\'].hasError(\'required\')}">\n\n                <ion-label stacked translate>Tu teléfono *</ion-label>\n\n                <ion-input class="telefono" #telefonoInput\n\n                    type="text" formControlName="telefono"\n\n                    onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="9" value=""\n\n                    required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked translate>Tu e-mail (opcional)</ion-label>\n\n                <ion-input type="email" formControlName="email"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="(formContacto.get(\'email\').dirty || formContacto.get(\'email\').dirty)">\n\n                <div class="error" *ngIf="formContacto.controls[\'email\'].hasError(\'emailCustom\')" translate>\n\n                    Introduce un email correcto\n\n                </div>\n\n            </div>\n\n\n\n            <ion-item *ngIf="esFormularioAyuda" [ngClass]="{ \'error-item\' : formContacto.controls[\'quenecesitas\'].hasError(\'required\')}">\n\n                <ion-label stacked translate>Cuéntanos que necesitas</ion-label>\n\n                <ion-input type="text" autofocus="autofocus" formControlName="quenecesitas" value="">\n\n                </ion-input>\n\n            </ion-item>\n\n            <p class="ca__leyenda">\n\n                <em translate>* Campos obligatorios</em>\n\n            </p>\n\n\n\n            <button type="button" ion-button class="ca__btn-enviar c-btn"\n\n                (click)="enviar()" [disabled]="!formContacto.valid">\n\n                <span translate>Enviar</span>\n\n            </button>\n\n        </form>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\contacto\contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_correos_correos_provider_interface__["a" /* ICorreosProvider */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Correo; });
var Correo = /** @class */ (function () {
    function Correo(nombre, telefono, email, quenecesitas) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.quenecesitas = quenecesitas;
    }
    return Correo;
}());

//# sourceMappingURL=correos.model.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapaModule = /** @class */ (function () {
    function MapaModule() {
    }
    MapaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapa__["a" /* MapaComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mapa__["a" /* MapaComponent */]
            ]
        })
    ], MapaModule);
    return MapaModule;
}());

//# sourceMappingURL=mapa.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_i18n_i18n_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_geolocalizacion_model__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geolocalizacion_mapa_provider_interface__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_geolocalizacion_mapa_helper__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MapaComponent = /** @class */ (function () {
    function MapaComponent(mapaProvider, toastCtrl, loadingCtrl, diagnostic, platform, mapaHelper) {
        this.mapaProvider = mapaProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.mapaHelper = mapaHelper;
        this.mostrarMsgLocalizacionUsuario = true;
        this.oculto = false;
        this.mapaCargado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSpinner = true;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.deaIcon = 'assets/imgs/icon_excursion_map.png';
    }
    MapaComponent.prototype.ngOnInit = function () {
        if (!this.oculto) {
            this.checkGpsActivated();
            this.presentLoading('Cargando mapa...');
        }
        this.loadMap();
    };
    MapaComponent.prototype.ngOnChanges = function (inputChanges) {
        if ((inputChanges.centro && inputChanges.centro.currentValue && !inputChanges.centro.firstChange) ||
            (inputChanges.localizacionUsuario && inputChanges.localizacionUsuario.currentValue && !inputChanges.localizacionUsuario.firstChange) ||
            (inputChanges.excursiones && inputChanges.excursiones.currentValue && JSON.stringify(inputChanges.excursiones.currentValue) != JSON.stringify(this.excursiones) && !inputChanges.excursiones.firstChange)) {
            if (!this.mapa) {
                this.loadMap();
            }
            //this.ref.markForCheck();
            this.loadMarkers();
        }
    };
    MapaComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    MapaComponent.prototype.checkGpsActivated = function () {
        var _this = this;
        if (!this.mostrarMsgLocalizacionUsuario) {
            return;
        }
        this.platform.ready().then(function () {
            _this.diagnostic.isLocationEnabled().then(function () {
                _this.presentToast('Gps activado', 'succesToast');
            })
                .catch(function () {
                _this.presentToast('No tienes el GPS activado. Por tanto tu localización no será exacta.', 'warningToast');
            });
        });
    };
    MapaComponent.prototype.loadMap = function () {
        var _this = this;
        this.subscriptions.add(this.mapaProvider.loadMap(this.mapElement.nativeElement, this.localizacionUsuario)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () {
            _this.showSpinner = false;
            if (_this.loader) {
                _this.loader.dismiss();
            }
        }))
            .mergeMap(function (mapa) {
            _this.mapa = mapa;
            _this.mapaCargado.emit(mapa);
            if (_this.excursiones) {
                _this.setMarkers();
                return _this.mapaProvider.addMarkers(mapa, _this.marcadores, false);
            }
        })
            .subscribe(function () {
            _this.setCenterAndZoom();
        }, function () {
            _this.errorMessage = Object(__WEBPACK_IMPORTED_MODULE_5__core_i18n_i18n_service__["b" /* extract */])('Se ha producido un error al cargar el mapa');
        }));
    };
    MapaComponent.prototype.loadMarkers = function () {
        var _this = this;
        this.presentLoading('Actualizando mapa...');
        this.setMarkers();
        this.subscriptions.add(this.mapaProvider.addMarkers(this.mapa, this.marcadores, false)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () {
            _this.showSpinner = false;
            setTimeout(function () {
                _this.loader.dismiss();
            }, 2000);
        }))
            .subscribe(function () {
            if (!_this.maintainZoom)
                _this.setCenterAndZoom();
        }));
    };
    MapaComponent.prototype.setMarkers = function () {
        var _this = this;
        if (!this.excursiones && this.centro) {
            this.marcadores = [];
            var marcador = new __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_geolocalizacion_model__["c" /* Marcador */](this.centro.latitud, this.centro.longitud, this.deaIcon, null);
            this.marcadores.push(marcador);
        }
        else {
            this.marcadores = this.excursiones.map(function (ex) {
                var coordenadas = ex.point.coordinates.split(',');
                var marcador = new __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_geolocalizacion_model__["c" /* Marcador */](Number(coordenadas[1]), Number(coordenadas[0]), _this.deaIcon, _this.mapaHelper.createInfoWindowExcursion(ex));
                return marcador;
            });
        }
    };
    MapaComponent.prototype.setCenterAndZoom = function () {
        if (this.centro != null) {
            this.mapaProvider.setCenter(this.mapa, this.centro);
            this.mapaProvider.setZoom(this.mapa, 14);
        }
        else {
            this.mapaProvider.setCenter(this.mapa);
            this.mapaProvider.setZoom(this.mapa, 9);
        }
    };
    MapaComponent.prototype.presentToast = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            duration: __WEBPACK_IMPORTED_MODULE_9__app_app_constants__["a" /* AppSettings */].toastDuration,
            closeButtonText: 'Aceptar',
            position: 'top',
            cssClass: cssClass
        });
        toast.present();
    };
    MapaComponent.prototype.presentLoading = function (content) {
        this.loader = this.loadingCtrl.create({
            content: content
        });
        this.loader.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapaComponent.prototype, "maintainZoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapaComponent.prototype, "excursiones", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */])
    ], MapaComponent.prototype, "centro", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */])
    ], MapaComponent.prototype, "localizacionUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapaComponent.prototype, "mostrarMsgLocalizacionUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapaComponent.prototype, "oculto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MapaComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MapaComponent.prototype, "mapaCargado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapaComponent.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoWindow'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapaComponent.prototype, "infoWindowElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoWindowAddress'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapaComponent.prototype, "infoWindowAddressElement", void 0);
    MapaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mapa',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\mapa\mapa.html"*/'<div #map class="map"></div>\n\n'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\components\mapa\mapa.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_geolocalizacion_mapa_provider_interface__["a" /* IMapaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_10__providers_geolocalizacion_mapa_helper__["a" /* MapaHelper */]])
    ], MapaComponent);
    return MapaComponent;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_excursiones_excursiones_provider_interface__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geolocalizacion_geo_provider_interface__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_geolocalizacion_model__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapaPage = /** @class */ (function () {
    function MapaPage(excursionesProvider, geoProvider) {
        this.excursionesProvider = excursionesProvider;
        this.geoProvider = geoProvider;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
    }
    MapaPage.prototype.ngOnInit = function () {
        this.cargaDatos();
    };
    MapaPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    MapaPage.prototype.cargaDatos = function () {
        var _this = this;
        this.subscriptions.add(this.excursionesProvider.getExcursiones()
            .subscribe(function (excursiones) {
            excursiones.forEach(function (ex) {
                var coordenadas = ex.point.coordinates.split(',');
                var localizacionExcursion = new __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */](Number(coordenadas[1]), Number(coordenadas[0]));
                ex.distanciaUsuario = _this.geoProvider.getGeographicDistance(new __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_geolocalizacion_model__["b" /* Localizacion */](42.8168700, -1.6432300), localizacionExcursion);
            });
            _this.excursiones = excursiones.sort(function (e) { return e.distanciaUsuario; });
        }));
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mapa-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\mapa\mapa.html"*/'<custom-header [title]="\'Cuki Sara\'"></custom-header>\n\n<ion-content [hidden]="showSpinner">\n\n  <mapa *ngIf="excursiones" [excursiones]="excursiones"></mapa>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\mapa\mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_excursiones_excursiones_provider_interface__["a" /* IExcursionesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_geolocalizacion_geo_provider_interface__["a" /* IGeoProvider */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoluntariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(13);
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
            selector: 'voluntarios-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\voluntarios\voluntarios.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-voluntario" src="assets/imgs/usuarios/voluntarios.png" />\n\n                <span translate>Quiero ser voluntario</span>\n\n            </div>\n\n        </div>\n\n\n\n        <p translate>\n\n            Sólo hace falta que tengas ganas y un poco de tu tiempo\n\n        </p>\n\n        <p translate>\n\n            Puedes ayudar si cumples los siguientes requisitos\n\n        </p>\n\n        <ul>\n\n            <li translate>\n\n                No haber tenido síntomas de COVID-19\n\n            </li>\n\n            <li translate>\n\n                En los últimos días no haber estado en espacios de riesgo\n\n            </li>\n\n        </ul>\n\n\n\n        <div class="usuario">\n\n            <div class="btn-usuario-wrapper">\n\n                <button type="button" ion-button class="c-btn btn-usuario" (click)="goPage(\'ContactoPage\')">\n\n                    <span translate>Contacta con nosotros</span>\n\n                </button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\voluntarios\voluntarios.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object])
    ], VoluntariosPage);
    return VoluntariosPage;
    var _a;
}());

//# sourceMappingURL=voluntarios.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_custom_header_custom_header__ = __webpack_require__(501);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
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

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanJuanXarApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_env_provider__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cordova_cordova_provider__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_hockeyapp__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_hockeyapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic_hockeyapp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_i18n_i18n_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_que_hacemos_que_hacemos__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_voluntarios_voluntarios__ = __webpack_require__(599);
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
    function SanJuanXarApp(envProvider, i18nService, cordovaProvider, cacheStorage, app, platform, hockeyapp) {
        var _this = this;
        this.envProvider = envProvider;
        this.i18nService = i18nService;
        this.cordovaProvider = cordovaProvider;
        this.cacheStorage = cacheStorage;
        this.app = app;
        this.platform = platform;
        this.hockeyapp = hockeyapp;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { component: __WEBPACK_IMPORTED_MODULE_8__pages_que_hacemos_que_hacemos__["a" /* QueHacemosPage */], title: '¿Qué estamos haciendo?', icon: 'assets/imgs/icons/ayuda.png' },
            { component: __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__["a" /* AyudaPage */], title: 'Necesito ayuda', icon: 'assets/imgs/usuarios/ayuda.png' },
            { component: __WEBPACK_IMPORTED_MODULE_11__pages_voluntarios_voluntarios__["a" /* VoluntariosPage */], title: 'Quiero ser voluntari@', icon: 'assets/imgs/usuarios/voluntarios.png' }
        ];
        this.platform.ready().then(function () {
            // The Android ID of the app as provided by the HockeyApp portal. Can be null if for iOS only.
            var androidAppId = 'c90b91a744e54266af0a7c54d41735a7';
            // The iOS ID of the app as provided by the HockeyApp portal. Can be null if for android only.
            var iosAppId = null;
            // Specifies whether you would like crash reports to be automatically sent to the HockeyApp server when the end user restarts the app.
            var autoSendCrashReports = false;
            // Specifies whether you would like to display the standard dialog when the app is about to crash. This parameter is only relevant on Android.
            var ignoreCrashDialog = true;
            _this.hockeyapp.start(androidAppId, iosAppId, autoSendCrashReports, ignoreCrashDialog);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]) === "function" && _a || Object)
    ], SanJuanXarApp.prototype, "nav", void 0);
    SanJuanXarApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\app\app.html"*/'<ion-menu [content]="content" [persistent]="false">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        <img src="assets/imgs/logos/sanjuanxar.png" click="openPage(\'HomePage\')" />\n\n        <div class="menu-title" click="openPage(\'HomePage\')">\n\n          <div translate class="title">Cuida a tus vecinos</div>\n\n          <div translate class="subtitle">Haz barrio</div>\n\n        </div>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <div>\n\n          <img src="{{ p.icon }}" />\n\n          {{p.title}}\n\n        </div>\n\n      </ion-item>\n\n      <ion-item menuClose ion-item  (click)="exitApp()">\n\n        <div>\n\n          <img src="assets/imgs/icons/exit.png" />\n\n          Salir\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__env_env_provider__["a" /* EnvProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__env_env_provider__["a" /* EnvProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__core_i18n_i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_i18n_i18n_service__["a" /* I18nService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_cordova_cordova_provider__["a" /* CordovaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_cordova_cordova_provider__["a" /* CordovaProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_hockeyapp__["HockeyApp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_hockeyapp__["HockeyApp"]) === "function" && _h || Object])
    ], SanJuanXarApp);
    return SanJuanXarApp;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createHttpService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_device_detector__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_device_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errorHandler_errorHandler__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_global_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_http_auth_http_auth__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_http_auth_http_auth_error__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_http_cache_http_cache_interceptor__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_http_cache_http_cache_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_http_schema_http_schema_interceptor__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__http_http_schema_http_schema_service__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__http_http_service__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__i18n_i18n_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__i18n_i18n_missing_handler__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logging_logging_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__env_env_provider__ = __webpack_require__(76);
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

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logging_logging_service__ = __webpack_require__(119);
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

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpAuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_auth_error__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_env_provider__ = __webpack_require__(76);
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_cache_service__ = __webpack_require__(171);
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

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpSchemaInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_logging_logging_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_schema_service__ = __webpack_require__(411);
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

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
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

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLocalizacionProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_geolocalizacion_mapa_provider_interface__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geo_provider_interface__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geolocalizacion_geo_provider__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_address_suggestions_interface__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geolocalizacion_address_suggestions_provider__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_geolocalizacion_mapa_helper__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_mapa_provider_fake__ = __webpack_require__(761);
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__providers_geolocalizacion_mapa_provider_interface__["a" /* IMapaProvider */], useClass: __WEBPACK_IMPORTED_MODULE_7__providers_geolocalizacion_mapa_provider_fake__["a" /* MapaProviderFake */] },
                //Necesario hacer fake porque no podemos acceder a Internet desde el móvil de pruebas 
                { provide: __WEBPACK_IMPORTED_MODULE_4__providers_geolocalizacion_address_suggestions_interface__["a" /* IAddressSuggestionsProvider */], useClass: __WEBPACK_IMPORTED_MODULE_5__providers_geolocalizacion_address_suggestions_provider__["a" /* AddressSuggestionsProvider */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geo_provider_interface__["a" /* IGeoProvider */], useClass: __WEBPACK_IMPORTED_MODULE_3__providers_geolocalizacion_geo_provider__["a" /* GeoProvider */] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__providers_geolocalizacion_mapa_helper__["a" /* MapaHelper */], useClass: __WEBPACK_IMPORTED_MODULE_6__providers_geolocalizacion_mapa_helper__["a" /* MapaHelper */] }
            ]
        })
    ], GeoLocalizacionProviderModule);
    return GeoLocalizacionProviderModule;
}());

//# sourceMappingURL=geolocalizacion.provider.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_utils__ = __webpack_require__(314);
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

/***/ 759:
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(47);
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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressSuggestionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__ = __webpack_require__(103);
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
                            sugerencias.push(new __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__["d" /* SugerenciaDireccion */](prediction.place_id, prediction.description, prediction.structured_formatting.main_text, prediction.structured_formatting.secondary_text));
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

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocalizacion_geolocalizacion_model__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(75);
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

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_provider_interface__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_provider__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuarios_provider_fake__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UsuarioProviderModule = /** @class */ (function () {
    function UsuarioProviderModule() {
    }
    UsuarioProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__usuarios_provider_interface__["a" /* IUsuarioProvider */], useClass: __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realServer ? __WEBPACK_IMPORTED_MODULE_3__usuarios_provider__["a" /* UsuarioProvider */] : __WEBPACK_IMPORTED_MODULE_4__usuarios_provider_fake__["a" /* UsuarioProviderFake */] }
            ]
        })
    ], UsuarioProviderModule);
    return UsuarioProviderModule;
}());

//# sourceMappingURL=usuarios.provider.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_provider_interface__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(109);
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




var UsuarioProvider = /** @class */ (function (_super) {
    __extends(UsuarioProvider, _super);
    function UsuarioProvider(db) {
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.dbPath = '/usuarios';
        return _this;
    }
    UsuarioProvider.prototype.getUsuarioById = function (id) {
        this.db.object(this.dbPath + '/' + id).snapshotChanges().map(function (res) {
            return res.payload.val();
        });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ id: '1', nombre: 'Sara' });
    };
    UsuarioProvider.prototype.getUsuarios = function () {
        var usuarios = this.db.list(this.dbPath);
        return usuarios.valueChanges();
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}(__WEBPACK_IMPORTED_MODULE_2__usuarios_provider_interface__["a" /* IUsuarioProvider */]));

//# sourceMappingURL=usuarios.provider.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_provider_interface__ = __webpack_require__(102);
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



var UsuarioProviderFake = /** @class */ (function (_super) {
    __extends(UsuarioProviderFake, _super);
    function UsuarioProviderFake(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = '/usuarios';
        return _this;
    }
    UsuarioProviderFake.prototype.getUsuarioById = function (id) {
        var urlBackend = this.url + '?id=' + id;
        return this.http
            .config({ cache: true })
            .get(urlBackend);
    };
    UsuarioProviderFake.prototype.getUsuarios = function () {
        var urlBackend = this.url;
        return this.http
            .config({ cache: true })
            .get(urlBackend);
    };
    UsuarioProviderFake = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioProviderFake);
    return UsuarioProviderFake;
}(__WEBPACK_IMPORTED_MODULE_2__usuarios_provider_interface__["a" /* IUsuarioProvider */]));

//# sourceMappingURL=usuarios.provider.fake.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_printer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_mocks_keyboard__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_mocks_splash_screen__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_mocks_status_bar__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_mocks_social_sharing__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_mocks_printer__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_mocks_native_page_transitions__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_diagnostic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_cordova_cordova_provider__ = __webpack_require__(405);
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
                    provide: __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */] : __WEBPACK_IMPORTED_MODULE_9__ionic_native_mocks_keyboard__["a" /* KeyboardMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] : __WEBPACK_IMPORTED_MODULE_10__ionic_native_mocks_splash_screen__["a" /* SplashScreenMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] : __WEBPACK_IMPORTED_MODULE_11__ionic_native_mocks_status_bar__["a" /* StatusBarMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */] : __WEBPACK_IMPORTED_MODULE_12__ionic_native_mocks_social_sharing__["a" /* SocialSharingMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ionic_native_printer__["a" /* Printer */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_6__ionic_native_printer__["a" /* Printer */] : __WEBPACK_IMPORTED_MODULE_13__ionic_native_mocks_printer__["a" /* PrinterMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                    useClass: isWeb ? __WEBPACK_IMPORTED_MODULE_17__providers_cordova_empty_provider__["a" /* EmptyProvider */] : (!isCordovaMockable ? __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */] : __WEBPACK_IMPORTED_MODULE_14__ionic_native_mocks_native_page_transitions__["a" /* NativePageTransitionsMock */])
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */],
                    useClass: __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */]
                },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_18__providers_cordova_cordova_provider__["a" /* CordovaProvider */]
            ]
        })
    ], CordovaProviderModule);
    return CordovaProviderModule;
}());

//# sourceMappingURL=cordova.provider.module.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(591);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]
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

/***/ 774:
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

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcursionesProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_excursiones_excursiones_provider_interface__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_excursiones_excursiones_provider__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_excursiones_excursiones_provider_fake__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExcursionesProviderModule = /** @class */ (function () {
    function ExcursionesProviderModule() {
    }
    ExcursionesProviderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__providers_excursiones_excursiones_provider_interface__["a" /* IExcursionesProvider */], useClass: __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* EnvSettings */].realServer ? __WEBPACK_IMPORTED_MODULE_3__providers_excursiones_excursiones_provider__["a" /* ExcursionesProvider */] : __WEBPACK_IMPORTED_MODULE_4__providers_excursiones_excursiones_provider_fake__["a" /* ExcursionesProviderFake */] }
            ]
        })
    ], ExcursionesProviderModule);
    return ExcursionesProviderModule;
}());

//# sourceMappingURL=excursiones.provider.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcursionesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_excursiones_excursiones_provider_interface__ = __webpack_require__(104);
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



var ExcursionesProvider = /** @class */ (function (_super) {
    __extends(ExcursionesProvider, _super);
    function ExcursionesProvider(db) {
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.dbPath = '/excursiones';
        return _this;
    }
    ExcursionesProvider.prototype.getExcursiones = function () {
        var actividades = this.db.list(this.dbPath);
        return actividades.valueChanges();
    };
    ExcursionesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ExcursionesProvider);
    return ExcursionesProvider;
}(__WEBPACK_IMPORTED_MODULE_2__providers_excursiones_excursiones_provider_interface__["a" /* IExcursionesProvider */]));

//# sourceMappingURL=excursiones.provider.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcursionesProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_excursiones_excursiones_provider_interface__ = __webpack_require__(104);
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




var ExcursionesProviderFake = /** @class */ (function (_super) {
    __extends(ExcursionesProviderFake, _super);
    function ExcursionesProviderFake(http, cacheStorage) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.cacheStorage = cacheStorage;
        _this.url = '/excursiones';
        return _this;
    }
    ExcursionesProviderFake.prototype.getExcursiones = function () {
        var request = this.http.config({ cache: true })
            .get(this.url);
        return this.cacheStorage.loadFromDelayedObservable(this.url, request, undefined, undefined, 'all');
    };
    ExcursionesProviderFake = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */]])
    ], ExcursionesProviderFake);
    return ExcursionesProviderFake;
}(__WEBPACK_IMPORTED_MODULE_3__providers_excursiones_excursiones_provider_interface__["a" /* IExcursionesProvider */]));

//# sourceMappingURL=excursiones.provider.fake.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroresProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_errores_errores_provider_interface__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_errores_errores_provider__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_errores_errores_provider_fake__ = __webpack_require__(780);
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

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_errores_errores_provider_interface__ = __webpack_require__(120);
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
    function ErroresProvider(db) {
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.dbPathErrores = '/errores';
        return _this;
    }
    ErroresProvider.prototype.addError = function (error) {
        var errores = this.db.list(this.dbPathErrores);
        errores.push(error);
    };
    ErroresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ErroresProvider);
    return ErroresProvider;
}(__WEBPACK_IMPORTED_MODULE_2__providers_errores_errores_provider_interface__["a" /* IErroresProvider */]));

//# sourceMappingURL=errores.provider.js.map

/***/ }),

/***/ 78:
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

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroresProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_errores_errores_provider_interface__ = __webpack_require__(120);
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

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__correos_provider_interface__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__correos_provider__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__correos_provider_fake__ = __webpack_require__(783);
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

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__correos_provider_interface__ = __webpack_require__(101);
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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProviderFake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__correos_provider_interface__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(35);
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

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaModule", function() { return GaleriaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_custom_header_custom_header_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_gallery_image_gallery_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__galeria__ = __webpack_require__(786);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__galeria__["a" /* GaleriaPage */]),
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

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__ = __webpack_require__(290);
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
            selector: 'galeria-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\galeria\galeria.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/galeria.png" />\n\n                <span translate>Imágenes</span>\n\n            </div>\n\n        </div>\n\n        <div *ngIf="imagenes" class="gallery">\n\n            <image-gallery [images]="imagenes"></image-gallery>\n\n            <div [hidden]="imagenes" class="no-imagenes">...</div>\n\n        </div>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\galeria\galeria.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _a || Object])
    ], GaleriaPage);
    return GaleriaPage;
    var _a;
}());

//# sourceMappingURL=galeria.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_gallery__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(503);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
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

/***/ })

},[420]);
//# sourceMappingURL=main.js.map