webpackJsonp([3],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], RegisterProvider);
    return RegisterProvider;
    var _a, _b;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LigaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
    function LigaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data;
    }
    LigaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LigaPage');
    };
    LigaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liga',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\liga\liga.html"*/'<!--\n  Generated template for the LigaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>liga</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <label>{{item.nombre}}</label>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\liga\liga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LigaPage);
    return LigaPage;
}());

//# sourceMappingURL=liga.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
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
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content padding center text-center>\n  <ion-title>Registro</ion-title>\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]=password></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-label stacked>Registrar</ion-label>\n  <button ion-button block (click)="doSignup()">\n      Registrar\n  </button>\n\n  <ion-label stacked>Regresar</ion-label>\n  <button ion-button block color="grey" (click)="irBack()" >\n      Regresar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/liga/liga.module": [
		496,
		2
	],
	"../pages/login/login.module": [
		497,
		1
	],
	"../pages/register/register.module": [
		498,
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
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n<ion-content padding center text-center>\n  <ion-title>Login</ion-title>\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email" name="email"  required="required"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n  <div><!-- *ngIf="email && password " -->\n    <ion-label stacked>Iniciar sesion</ion-label>\n    <button ion-button block (click)="submitLogin()">\n        Login\n    </button>\n  </div>\n  <ion-label stacked>No tiene cuenta?</ion-label>\n  <button ion-button block color="grey" (click)="irRegistro()">\n      Registrar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_liga_liga__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//importamos las paginas 



//import provider

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
                __WEBPACK_IMPORTED_MODULE_9__pages_liga_liga__["a" /* LigaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/liga/liga.module#LigaPageModule', name: 'LigaPage', segment: 'liga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //Indicamos los imports de firebase en NgModule
                //iniciamos la app con la constante del proyecto de firebase
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_liga_liga__["a" /* LigaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_register_register__["a" /* RegisterProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(289);
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Pages</ion-title>\n        </ion-toolbar>\n    </ion-header>\n   \n    <ion-content>\n        <ion-list>\n           <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n            {{p.title}}\n           </button>\n           <button menuClose ion-item icon-start (click)="exitUser()">\n                <ion-icon name="exit"></ion-icon>\n                    Exit\n                </button>\n        </ion-list>\n    </ion-content>\n      \n  </ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__providers_register_register__["a" /* RegisterProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_register_register__["a" /* RegisterProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__liga_liga__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(235);
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
    function HomePage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        //const itemRef = this.db.object('item');
        //this.getFirebase();
        this.getFirebase2();
    }
    //Get info from firebase
    HomePage.prototype.getFirebase2 = function () {
        var _this = this;
        this.db.list('/').valueChanges().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.items = data;
        });
    };
    HomePage.prototype.getFirebase = function () {
        var _this = this;
        this.db.list('/').valueChanges().subscribe(function (data) {
            console.log(data);
            _this.items = data;
        });
    };
    HomePage.prototype.irLiga = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__liga_liga__["a" /* LigaPage */], item);
    };
    HomePage.prototype.irPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="irLiga(item)">\n      <!--\n      <ion-thumbnail item-start>\n        <img/>\n      </ion-thumbnail>\n    <button ion-button clear item-end (click)="irLiga(item)">View</button>\n    -->\n      <h2>{{item.nombre}}</h2>\n      <p>Hayao Miyazaki • {{item.fecha}}</p>      \n    </ion-item>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map