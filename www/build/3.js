webpackJsonp([3],{

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
        var imagen1 = new __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["a" /* Imagen */]();
        imagen1.id = 1;
        imagen1.tipo = __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["b" /* eTipoImagen */].Normalizada;
        var contenido = 'data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==';
        imagen1.imagen = contenido;
        var imagen1Thumbnail = new __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["a" /* Imagen */]();
        imagen1Thumbnail.id = 1;
        imagen1Thumbnail.tipo = __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_image_gallery_model__["b" /* eTipoImagen */].Thumbnail;
        imagen1Thumbnail.imagen = contenido;
        this.imagenes.push(imagen1);
        this.imagenes.push(imagen1Thumbnail);
    };
    GaleriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'galeria-page',template:/*ion-inline-start:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\galeria\galeria.html"*/'<custom-header [title]="title"></custom-header>\n\n<ion-content>\n\n    <div class="custom-container descripcion">\n\n        <div class="lnk-wrapper">\n\n            <div class="titulo-haciendo">\n\n                <img alt="icono-que-estamos-haciendo" src="assets/imgs/icons/ayuda.png" />\n\n                <span translate>¿Qué estamos haciendo?</span>\n\n            </div>\n\n        </div>\n\n        <p>\n\n            <span translate>\n\n                Desde el\n\n            </span>\n\n            <span class="destacado" translate>\n\n                Pacto por la Persona Mayor\n\n            </span>\n\n            <span translate>\n\n                y\n\n            </span>\n\n            <span class="destacado" translate>\n\n                Maratxa\n\n            </span>\n\n            <span translate>\n\n                queremos trasladar un mensaje de tranquilidad, responsabilidad y solidaridad.\n\n            </span>\n\n        </p>\n\n        <p>\n\n            <span translate>\n\n                Es un momento difícil, pero el COVID-19 puede sacar lo mejor de las personas y lo más auténtico de un barrio: </span>\n\n            <span class="destacado" translate>\n\n                solidaridad, participación y la implicación en construir entre tod@s un San Juan mejor.\n\n            </span>\n\n        </p>\n\n        <p>\n\n            <span translate>\n\n                Es por eso, que\n\n            </span>\n\n            <span class="destacado" translate>\n\n                estamos creando una red de voluntari@s\n\n            </span>\n\n            <span translate>\n\n                para ayudar a las personas que así lo necesitéis. Porque lo primero, son las personas.\n\n            </span>\n\n        </p>\n\n\n\n        <div class="cuenta-usuarios">\n\n            <div class="usuario">\n\n                <div class="img-usuario-wrapper">\n\n                    <img class="img-ayuda" alt="icono-ayuda" src="assets/imgs/usuarios/ayuda.png" />\n\n                </div>\n\n                <div class="numero">\n\n                    <div class="destacado" translate>Más de 100</div>\n\n                    <div class="destacado" translate>personas atendidas</div>\n\n                </div>\n\n            </div>\n\n            <div class="usuario">\n\n                <div class="img-usuario-wrapper">\n\n                    <img alt="icono-voluntaria" src="assets/imgs/usuarios/voluntarios.png" />\n\n                </div>\n\n                <div class="numero">\n\n                    <div class="destacado" translate>88</div>\n\n                    <div class="destacado" translate>voluntari@s</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n        <div *ngIf="imagenes" class="gallery">\n\n            <image-gallery [images]="imagenes"></image-gallery>\n\n            <div [hidden]="imagenes" class="no-imagenes">...</div>\n\n        </div>\n\n    </div>\n\n    <footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\txilvi\Documents\donibane-voluntarios\src\pages\galeria\galeria.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _a || Object])
    ], GaleriaPage);
    return GaleriaPage;
    var _a;
}());

//# sourceMappingURL=galeria.js.map

/***/ })

});
//# sourceMappingURL=3.js.map