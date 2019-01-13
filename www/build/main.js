webpackJsonp([4],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(afStorage, db) {
        this.afStorage = afStorage;
        this.db = db;
    }
    DataProvider.prototype.getImg = function (path) {
        return this.afStorage.storage.ref(path).getDownloadURL();
    };
    DataProvider.prototype.addItem = function (item, path) {
        this.ListaJugadores = this.db.list(path);
        return this.ListaJugadores.push(item);
    };
    DataProvider.prototype.valData = function (path) {
        return this.db.list(path + '/Jugadores').valueChanges();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["AngularFireStorage"],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LigaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partida_partida__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_register__ = __webpack_require__(44);
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
 * Generated class for the LigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LigaPage = /** @class */ (function () {
    function LigaPage(navCtrl, navParams, dataProvider, rp, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.rp = rp;
        this.alertCtrl = alertCtrl;
        this.item = navParams.data;
        //this.getImg(this.item.img);
        this.loadImg();
        this.getEmail();
        this.player = {
            email: this.email,
            partidas: 0,
            victorias: 0
        };
        this.cargarJugadores(this.item.nombre);
    }
    LigaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LigaPage');
    };
    LigaPage.prototype.loadImg = function () {
        var _this = this;
        this.dataProvider.getImg(this.item.img).then(function (url) {
            _this.meta = url;
        });
    };
    LigaPage.prototype.getEmail = function () {
        if (this.rp.valEmail()) {
            this.email = this.rp.getEmailUser();
        }
        else
            this.email = "Anonimo";
    };
    LigaPage.prototype.participar = function (item) {
        if (this.val() < 1) {
            this.dataProvider.addItem(item, this.item.nombre + '/Jugadores').then(function (ref) {
                console.log(ref.key);
            });
        }
        else {
            this.showAlert();
        }
    };
    LigaPage.prototype.cargarJugadores = function (liga) {
        var _this = this;
        this.dataProvider.valData(liga).subscribe(function (data) {
            _this.players = data;
        });
    };
    LigaPage.prototype.val = function () {
        var num = 0;
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.email == this.email) {
                num++;
            }
        }
        return num;
    };
    LigaPage.prototype.newGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__partida_partida__["a" /* PartidaPage */], this.item);
    };
    LigaPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Ya esta participando!',
            subTitle: 'Ahora mismo usted esta registrado en la liga de ' + this.item.nombre,
            buttons: ['OK']
        });
        alert.present();
    };
    LigaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-liga',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\liga\liga.html"*/'<!--\n  Generated template for the LigaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Liga de {{item.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <label>{{item.nombre}}</label>\n  <img src="{{meta}}"/>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full (click)="participar(player)">Participar</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button full (click)="newGame(this.item)">Nueva Partida</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\liga\liga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], LigaPage);
    return LigaPage;
}());

//# sourceMappingURL=liga.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the PartidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartidaPage = /** @class */ (function () {
    function PartidaPage(navCtrl, navParams, dataProvider, rp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.rp = rp;
        this.ligaData = navParams.data;
        this.getEmail();
    }
    PartidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartidaPage');
    };
    PartidaPage.prototype.saveData = function () {
        this.game = {
            email: this.email,
            emailOP: this.emailOp,
            ganador: this.ganador
        };
        this.participar(this.game);
    };
    PartidaPage.prototype.participar = function (item) {
        this.dataProvider.addItem(item, this.ligaData.nombre + '/Partidas').then(function (ref) {
            console.log(ref.key);
        });
    };
    PartidaPage.prototype.val = function () {
    };
    PartidaPage.prototype.getEmail = function () {
        if (this.rp.valEmail()) {
            this.email = this.rp.getEmailUser();
        }
        else
            this.email = "Anonimo";
    };
    PartidaPage.prototype.clearData = function () {
        console.log(this.game);
    };
    PartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-partida',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\partida\partida.html"*/'<!--\n  Generated template for the PartidaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>partida</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding center text-center>\n  <ion-title>Nueva Partida</ion-title>\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label stacked>Email jugador</ion-label>\n      <ion-input type="text" [(ngModel)]="email" value="{{this.email}}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email/nombre oponente</ion-label>\n      <ion-input type="text" [(ngModel)]=emailOp></ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Resultado</ion-label>\n        <ion-select [(ngModel)]="ganador">\n          <ion-option value="{{this.email}}">Victoria</ion-option>\n          <ion-option value="{{this.emailOp}}">Derrota</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label>Enviar verificacion</ion-label>\n      <ion-checkbox color="primary" checked="false"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-label stacked>Guardar Partida</ion-label>\n  <button ion-button block (click)="saveData()">\n      Guardar\n  </button>\n\n  <ion-label stacked>Limpiar Campos</ion-label>\n  <button ion-button block color="grey" (click)="clearData()" >\n      Limpiar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\partida\partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */]])
    ], PartidaPage);
    return PartidaPage;
}());

//# sourceMappingURL=partida.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, rp, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rp = rp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.irRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.isRegister = function () {
        var _this = this;
        this.rp.angularAuth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (res) {
            console.log("Bienvenido " + res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            console.error("Error: " + error);
        });
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        if (this.email != null && this.password != null) {
            loader.present();
            this.rp.loginUserService(this.email, this.password).then(function (authData) {
                //successful
                loader.dismiss();
                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }, function (error) {
                loader.dismiss();
                // Unable to log in
                var toast = _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                that.password = ""; //empty the password field
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Hay campos vacios',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n<ion-content padding center text-center>\n  <ion-title>Login</ion-title>\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email" name="ngEmail"  required="required"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="ngPassword" required="required"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n  <div><!-- *ngIf="email && password " -->\n    <ion-label stacked>Iniciar sesion</ion-label>\n    <button ion-button block (click)="submitLogin()">\n        Login\n    </button>\n  </div>\n  <ion-label stacked>No tiene cuenta?</ion-label>\n  <button ion-button block color="grey" (click)="irRegistro()">\n      Registrar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, rp, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rp = rp;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.irBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.mostrar = function () {
        console.log(this.email);
        console.log(this.password);
    };
    RegisterPage.prototype.doSignup = function () {
        var _this = this;
        var account = {
            email: this.email,
            password: this.password,
        };
        var that = this;
        if (this.email != null && this.password != null) {
            var loader = this.loadingCtrl.create({
                content: "Please wait...",
            });
            loader.present();
            this.rp.signupUserService(account).then(function (authData) {
                //successful
                loader.dismiss();
                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }, function (error) {
                loader.dismiss();
                // Unable to log in
                var toast = _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                that.password = ""; //empty the password field
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Hay campos vacios',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content padding center text-center>\n  <ion-title>Registro</ion-title>\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]=password></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-label stacked>Registrar</ion-label>\n  <button ion-button block (click)="doSignup()">\n      Registrar\n  </button>\n\n  <ion-label stacked>Regresar</ion-label>\n  <button ion-button block color="grey" (click)="irBack()" >\n      Regresar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/liga/liga.module": [
		508,
		3
	],
	"../pages/login/login.module": [
		509,
		2
	],
	"../pages/partida/partida.module": [
		510,
		1
	],
	"../pages/register/register.module": [
		511,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_liga_liga__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_partida_partida__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_data_data__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//importamos las paginas 




//import providers


//Firebase imports




//Datos del proyecto en firebase
var firebaseConfig = {
    apiKey: "AIzaSyCQdjZm87dVyOSHjXV3QxsN3H1UNq6Vj4U",
    authDomain: "ligas-ionic.firebaseapp.com",
    databaseURL: "https://ligas-ionic.firebaseio.com",
    projectId: "ligas-ionic",
    storageBucket: "ligas-ionic.appspot.com",
    messagingSenderId: '63471547844'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_liga_liga__["a" /* LigaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_partida_partida__["a" /* PartidaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/liga/liga.module#LigaPageModule', name: 'LigaPage', segment: 'liga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partida/partida.module#PartidaPageModule', name: 'PartidaPage', segment: 'partida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //Indicamos los imports de firebase en NgModule
                //iniciamos la app con la constante del proyecto de firebase
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_liga_liga__["a" /* LigaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_partida_partida__["a" /* PartidaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(angularAuth, alertCtrl) {
        this.angularAuth = angularAuth;
        this.alertCtrl = alertCtrl;
        //console.log('Hello RegisterProvider Provider');
    }
    RegisterProvider.prototype.createUser = function (email, password) {
        this.angularAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    };
    RegisterProvider.prototype.loginUserService = function (email, password) {
        return this.angularAuth.auth.signInWithEmailAndPassword(email, password);
    };
    RegisterProvider.prototype.getEmailUser = function () {
        return this.angularAuth.auth.currentUser.email.toString();
    };
    RegisterProvider.prototype.valEmail = function () {
        if (this.angularAuth.auth.currentUser == null)
            return false;
        else
            return true;
    };
    RegisterProvider.prototype.signupUserService = function (account) {
        var _this = this;
        return this.angularAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']).then(function (newUser) {
            //sign in the user
            _this.angularAuth.auth.signInWithEmailAndPassword(account['email'], account['password']).then(function (authenticatedUser) {
                //successful login, create user profile
                /*this.userProfile.child(authenticatedUser.uid).set(
                  account
                );*/
            });
        });
    };
    /*
    login(email:string, password:string) {
      this.angularAuth.auth.signInWithEmailAndPassword(email,password)
      .then((res:any) => {
        this.canLog = true;
        console.log("Bienvenido " +res +this.canLog);
      })
      .catch((error:any)=> {
        console.error("Error: " +error +this.canLog);
        this.canLog = false;
      });
    }
    */
    RegisterProvider.prototype.logout = function () {
        this.angularAuth.auth.signOut();
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], RegisterProvider);
    return RegisterProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, registerProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.registerProvider = registerProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.exitUser = function () {
        this.registerProvider.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\app\app.html"*/'<ion-menu  [content]="content" swipeEnabled="false">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Pages</ion-title>\n        </ion-toolbar>\n    </ion-header>\n   \n    <ion-content>\n        <ion-list>\n           <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n            {{p.title}}\n           </button>\n           <button menuClose ion-item icon-start (click)="exitUser()">\n                <ion-icon name="exit"></ion-icon>\n                    Exit\n                </button>\n        </ion-list>\n    </ion-content>\n      \n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__providers_register_register__["a" /* RegisterProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__liga_liga__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_register__ = __webpack_require__(44);
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
    //item: string;
    function HomePage(navCtrl, db, rp) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.rp = rp;
        this.email = "";
        //const itemRef = this.db.object('item');
        //this.getFirebase();
        this.getFirebase();
        this.getEmail();
    }
    //Get info from firebase
    HomePage.prototype.getFirebase = function () {
        var _this = this;
        this.db.list('/').valueChanges().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.items = data;
        });
    };
    HomePage.prototype.getEmail = function () {
        if (this.rp.valEmail()) {
            this.email = this.rp.getEmailUser();
        }
        else
            this.email = "Anonimo";
    };
    HomePage.prototype.irLiga = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__liga_liga__["a" /* LigaPage */], item);
    };
    HomePage.prototype.irPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cuenta {{email}}\n    </ion-title>  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="irLiga(item)">\n      <!--\n      <ion-thumbnail item-start>\n        <img/>\n      </ion-thumbnail>\n    <button ion-button clear item-end (click)="irLiga(item)">View</button>\n    -->\n      <h2>{{item.nombre}}</h2>\n      <p>Hayao Miyazaki • {{item.fecha}}</p>      \n    </ion-item>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_4__providers_register_register__["a" /* RegisterProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map