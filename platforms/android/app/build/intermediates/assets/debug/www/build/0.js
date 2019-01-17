webpackJsonp([0],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLigaPageModule", function() { return AddLigaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_liga__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddLigaPageModule = /** @class */ (function () {
    function AddLigaPageModule() {
    }
    AddLigaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_liga__["a" /* AddLigaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_liga__["a" /* AddLigaPage */]),
            ],
        })
    ], AddLigaPageModule);
    return AddLigaPageModule;
}());

//# sourceMappingURL=add-liga.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLigaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddLigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddLigaPage = /** @class */ (function () {
    function AddLigaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = navParams.data;
        this.currentDate();
    }
    AddLigaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddLigaPage');
    };
    AddLigaPage.prototype.currentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            this.dia = '0' + dd;
        }
        if (mm < 10) {
            this.mes = '0' + mm;
        }
        this.fecha = this.mes + '/' + this.dia + '/' + yyyy;
        document.write(this.fecha);
    };
    AddLigaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-liga',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\add-liga\add-liga.html"*/'<!--\n  Generated template for the AddLigaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Nueva Liga</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-content padding text-center >\n    \n\n    <ion-item no-lines>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="profile.user.firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Creador</ion-label>\n      <ion-input type="text" [(ngModel)]="profile.email"></ion-input>\n    </ion-item>\n\n  <ion-label stacked></ion-label>\n\n  <button ion-button clear block >\n    Imagen de perfil \n  </button>\n\n  <button ion-button clear block >\n      Actualizar \n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\add-liga\add-liga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddLigaPage);
    return AddLigaPage;
}());

//# sourceMappingURL=add-liga.js.map

/***/ })

});
//# sourceMappingURL=0.js.map