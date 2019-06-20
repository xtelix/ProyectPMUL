webpackJsonp([7],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLigaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(51);
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
    function AddLigaPage(navCtrl, navParams, camera, toast, dp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.toast = toast;
        this.dp = dp;
        this.nombre = "";
        this.ruta = "Ligas/";
        this.pathTemp = "";
        this.myDate = new Date().toDateString();
        this.profile = navParams.data;
        this.dp.image = "";
        this.dp.ancho = 800;
        this.dp.alto = 650;
    }
    AddLigaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddLigaPage');
    };
    //SUBIR IMAGEN
    AddLigaPage.prototype.uploadImg = function () {
        try {
            this.dp.uploadHandlerGet();
        }
        catch (e) {
            this.toast.create({
                message: 'Error: ' + e,
                duration: 2000
            }).present();
        }
    };
    AddLigaPage.prototype.valLiga = function (item) {
        if (item.fecha != "" && item.fecha != null &&
            item.nombre != "" && item.nombre != null) {
            return true;
        }
        else
            return false;
    };
    AddLigaPage.prototype.loadImg = function (imgName) {
        var _this = this;
        try {
            this.dp.getImg(imgName).then(function (url) {
                _this.pathTemp = url;
            });
        }
        catch (error) {
        }
    };
    //GUARDA UNA LIGA EN FIREBASE
    AddLigaPage.prototype.crearLiga = function (path) {
        var _this = this;
        this.loadImg(this.dp.fileName);
        this.liga = {
            nombre: this.nombre,
            img: this.pathTemp,
            img_: this.pathTemp,
            fecha: this.myDate
        };
        console.log(this.liga);
        if (this.valLiga(this.liga)) {
            if (this.liga.img != "" && this.liga.img != null) {
                this.dp.addItemCustomKey(this.liga, path, this.liga.nombre).then(function () {
                    _this.toast.create({
                        message: 'Liga creada exitosamente!',
                        duration: 3000
                    }).present();
                }).catch(function (err) {
                    _this.toast.create({
                        message: err,
                        duration: 3000
                    }).present();
                });
            }
            else {
                this.toast.create({
                    message: "Seleccione una imagen",
                    duration: 3000
                }).present();
            }
        }
        else {
            this.toast.create({
                message: "Hay campos vacios",
                duration: 3000
            }).present();
        }
    };
    AddLigaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-liga',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\add-liga\add-liga.html"*/'<!--\n  Generated template for the AddLigaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Nueva Liga</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n    \n\n    <ion-item no-lines>\n      <ion-label floating>Nombre de la liga</ion-label>\n      <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Fecha</ion-label>\n      <ion-input type="text" [(ngModel)]="myDate"></ion-input>\n    </ion-item>\n\n    <ion-label stacked>Seleccione una imagen</ion-label>\n    <button ion-button block (click)="uploadImg()">\n      Imagen de portada \n    </button>\n\n    <button ion-button outline block (click)="crearLiga(ruta)">\n      Crear Liga \n    </button>\n   \n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\add-liga\add-liga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], AddLigaPage);
    return AddLigaPage;
}());

//# sourceMappingURL=add-liga.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LigaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partida_partida__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_register_register__ = __webpack_require__(44);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function LigaPage(navCtrl, navParams, dataProvider, rp, alertCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.rp = rp;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.email = this.getEmail();
        this.participando = false;
        this.player = {
            email: this.email,
            partidas: 0,
            victorias: 0
        };
        this.playerTemp = this.player;
        this.item = navParams.data;
        this.itemsRef = db.list("Ligas/" + this.item.nombre + '/Jugadores');
        // Use snapshotChanges().map() to store the key
        this.items = this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.items.subscribe(function (c) {
            _this.players = c;
            _this.participantes = _this.players.length;
            _this.searchPlayer(_this.players);
        });
    }
    LigaPage.prototype.searchPlayer = function (lista) {
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            var i = lista_1[_i];
            if (i.email == this.email) {
                this.player = i;
                this.playerTemp = i;
                this.participando = true;
                console.log(this.player);
                console.log(i.key);
            }
            //console.log(this.player.key +' ' +this.email); 
        }
    };
    LigaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LigaPage');
    };
    LigaPage.prototype.getEmail = function () {
        if (this.rp.valEmail()) {
            return this.rp.getEmailUser();
        }
        else
            return "Anonimo";
    };
    LigaPage.prototype.participar = function (item) {
        if (this.val()) {
            this.dataProvider.addItem(item, 'Ligas/' + this.item.nombre + '/Jugadores').then(function (ref) {
                console.log(ref.key);
            });
        }
        else {
            this.showAlert('Ya esta participando!', 'Ahora mismo usted esta registrado en la liga de ');
        }
    };
    LigaPage.prototype.abandonar = function (p) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Desea abandonar la liga?',
            message: 'Se eliminaran todos los progresos realizados',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.dataProvider.dellItemy('Ligas/' + _this.item.nombre + '/Jugadores', p).then(function (ref) {
                            console.log(p);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LigaPage.prototype.val = function () {
        var num = 0;
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.email == this.email) {
                num++;
            }
        }
        if (num < 1) {
            return true;
        }
        return false;
    };
    LigaPage.prototype.newGame = function () {
        if (!this.val()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__partida_partida__["a" /* PartidaPage */], this.item);
        }
        else
            this.showAlert('Debe participar', 'Para crear una partida tiene que participar antes en');
    };
    LigaPage.prototype.showAlert = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo + ' ' + this.item.nombre,
            buttons: ['OK']
        });
        alert.present();
    };
    LigaPage.prototype.showPlayerData = function (jugador) {
        this.playerTemp = jugador;
    };
    LigaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-liga',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\liga\liga.html"*/'<!--\n  Generated template for the LigaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Liga de {{item.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="{{this.item.img}}"/>\n  <ion-grid >\n    <ion-row>\n      <ion-col col-12 *ngIf="!participando">\n        <button ion-button full (click)="participar(player)">Participar</button>\n      </ion-col>\n      <ion-col col-6 *ngIf="participando">\n          <button ion-button full color="danger" (click)="abandonar(player)">Abandonar</button>\n      </ion-col>\n      <ion-col col-6 *ngIf="participando">\n          <button ion-button full (click)="newGame(this.item)">Nueva Partida</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Lista de jugadores -->\n  \n    <ion-list >\n      <ion-list-header color="primary">\n        Participantes: {{participantes}}\n      </ion-list-header>\n  \n      <ion-item-sliding *ngFor="let jugador of players">\n        <ion-item *ngIf="jugador.email != playerTemp.email">\n          <!-- Añadir avatars de usuarios\n          <ion-avatar item-start>\n            \n          </ion-avatar>\n          -->\n          <h2>{{jugador.email}}</h2>\n          <p>Partidas: {{jugador.partidas}} Victorias: {{jugador.victorias}}</p>\n        </ion-item>\n        <ion-item-options>\n          <!--\n          <button ion-button color="primary" icon-start (click)="showPlayerData(jugador)">\n            <ion-icon name="person"></ion-icon>\n            Datos\n          </button>-->\n          <button ion-button color="secondary" icon-start (click)="newGame(this.item)">\n            <ion-icon name="game-controller-b"></ion-icon>\n            Partida\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-list *ngIf="participando">\n        <ion-list-header color="primary">\n            Jugador: {{playerTemp.email}}\n        </ion-list-header>\n        <ion-item>    \n          <label>Puntuacion: {{playerTemp.partidas + (playerTemp.victorias * 2)}}</label><br/>\n          <label>Partidas totales: {{playerTemp.partidas}}</label><br/>\n          <label>Victorias: {{playerTemp.victorias}} </label>\n        </ion-item>\n    </ion-list>\n\n  \n  <!-- lista de jugadores -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\liga\liga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], LigaPage);
    return LigaPage;
}());

//# sourceMappingURL=liga.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(18);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function PartidaPage(navCtrl, navParams, dataProvider, rp, db, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.rp = rp;
        this.db = db;
        this.toast = toast;
        this.ligaData = navParams.data;
        this.getEmail();
        this.itemsRef = db.list("Ligas/" + this.ligaData.nombre + '/Jugadores');
        // Use snapshotChanges().map() to store the key
        this.items = this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.items.subscribe(function (c) {
            _this.players = c;
            _this.searchPlayer(_this.players);
        });
    }
    PartidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartidaPage');
    };
    PartidaPage.prototype.saveData = function () {
        if (this.val()) {
            this.game = {
                email: this.email,
                emailOP: this.emailOp,
                ganador: this.ganador
            };
            this.participar(this.game);
        }
        else {
            this.toast.create({
                message: 'Faltan campos requeridos',
                duration: 3000
            }).present();
        }
    };
    PartidaPage.prototype.participar = function (item) {
        var _this = this;
        this.dataProvider.addItem(item, 'Ligas/' + this.ligaData.nombre + '/Partidas').then(function (ref) {
            console.log(ref.key);
            //this.dataProvider.editItem(this.player, '/'+this.ligaData.nombre+'/Jugadores');
            _this.player.partidas++;
            if (item.ganador == item.email) {
                _this.player.victorias++;
            }
            //console.log(this.player); 
            _this.dataProvider.editItem(_this.player, 'Ligas/' + _this.ligaData.nombre + '/Jugadores').then(function (ref) {
                //console.log (ref.key);
                _this.toast.create({
                    message: 'Partida Guardada',
                    duration: 3000
                }).present();
            });
        });
    };
    PartidaPage.prototype.val = function () {
        if (this.email != null && this.emailOp != null && this.ganador != null) {
            return true;
        }
        return false;
    };
    PartidaPage.prototype.getEmail = function () {
        if (this.rp.valEmail()) {
            this.email = this.rp.getEmailUser();
        }
        else
            this.email = "Anonimo";
    };
    PartidaPage.prototype.getFirebase = function () {
        var _this = this;
        this.db.list('Ligas/' + this.ligaData.nombre + '/Jugadores').valueChanges().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.jugadoresData = data;
            _this.searchPlayer(_this.jugadoresData);
        });
        //console.log(JSON.stringify(this.jugadoresData));
    };
    PartidaPage.prototype.searchPlayer = function (lista) {
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            var i = lista_1[_i];
            if (i.email == this.email) {
                this.player = i;
                console.log(i.key);
            }
            //console.log(this.player.key +' ' +this.email); 
        }
    };
    PartidaPage.prototype.clearData = function () {
        console.log(this.game);
        console.log(this.items);
        console.log(this.player);
    };
    PartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-partida',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\partida\partida.html"*/'<!--\n  Generated template for the PartidaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>partida</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding center text-center>\n  <ion-title>Nueva Partida</ion-title>\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label floating>Email jugador</ion-label>\n      <ion-input type="text" [(ngModel)]="email" value="{{this.email}}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email/nombre oponente</ion-label>\n      <ion-input type="text" [(ngModel)]=emailOp></ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Resultado</ion-label>\n        <ion-select [(ngModel)]="ganador">\n          <ion-option value="{{this.email}}">Victoria</ion-option>\n          <ion-option value="{{this.emailOp}}">Derrota</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n  <!-- Envio de notificaciones \n    <ion-item>\n      <ion-label>Enviar verificacion</ion-label>\n      <ion-checkbox color="primary" checked="false"></ion-checkbox>\n    </ion-item>\n  -->\n  </ion-list>\n\n  <ion-label stacked>Guardar Partida</ion-label>\n  <button ion-button block (click)="saveData()">\n      Guardar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\partida\partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], PartidaPage);
    return PartidaPage;
}());

//# sourceMappingURL=partida.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
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
            content: "Por favor espere..."
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Login</ion-title>\n      </ion-navbar>\n</ion-header>\n<ion-content padding center text-center>\n  <!--\n  <ion-title>Login</ion-title>\n  -->\n  <img src="" alt=""/>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email" name="ngEmail"  required="required"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="ngPassword" required="required"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n  <div><!-- *ngIf="email && password " -->\n    <ion-label stacked>Iniciar sesion</ion-label>\n    <button ion-button block (click)="submitLogin()">\n        Login\n    </button>\n  </div>\n  <ion-label stacked>No tiene cuenta?</ion-label>\n  <button ion-button block color="grey" (click)="irRegistro()">\n      Registrar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\login\login.html"*/,
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
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
                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */]);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Registro</ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content padding center text-center>\n  <!--\n  <ion-title>Registro</ion-title>\n  <img src="" alt=""/>\n  -->\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]=password></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-label stacked>Registrar</ion-label>\n  <button ion-button block (click)="doSignup()">\n      Registrar\n  </button>\n\n  <ion-label stacked>Regresar</ion-label>\n  <button ion-button block color="grey" (click)="irBack()" >\n      Regresar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\register\register.html"*/,
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, afAuth, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.perfil = {};
        this.perfil.imgProfile = "profile" + Math.floor(Math.random() * (5 - 1) + 1) + ".png";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("perfil/" + auth.uid).set(_this.perfil)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]); });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item no-lines>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="perfil.firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Apellido</ion-label>\n      <ion-input type="text" [(ngModel)]="perfil.lastName"></ion-input>\n    </ion-item>\n\n  <ion-label stacked></ion-label>\n  <button ion-button block (click)="createProfile()">\n      Crear Perfil\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["AngularFireDatabase"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-liga/add-liga.module": [
		523,
		6
	],
	"../pages/edit-profile/edit-profile.module": [
		524,
		5
	],
	"../pages/liga/liga.module": [
		525,
		4
	],
	"../pages/login/login.module": [
		526,
		3
	],
	"../pages/partida/partida.module": [
		529,
		2
	],
	"../pages/profile/profile.module": [
		527,
		1
	],
	"../pages/register/register.module": [
		528,
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
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_liga_liga__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_partida_partida__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_liga_add_liga__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_partidas_jugadores_partidas_jugadores__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//importamos las paginas 








//import providers



//Firebase imports




//camara movil

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
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_liga_liga__["a" /* LigaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_partida_partida__["a" /* PartidaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_liga_add_liga__["a" /* AddLigaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-liga/add-liga.module#AddLigaPageModule', name: 'AddLigaPage', segment: 'add-liga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/liga/liga.module#LigaPageModule', name: 'LigaPage', segment: 'liga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partida/partida.module#PartidaPageModule', name: 'PartidaPage', segment: 'partida', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //Indicamos los imports de firebase en NgModule
                //iniciamos la app con la constante del proyecto de firebase
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_liga_liga__["a" /* LigaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_partida_partida__["a" /* PartidaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_liga_add_liga__["a" /* AddLigaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_partidas_jugadores_partidas_jugadores__["a" /* PartidasJugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
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
            _this.angularAuth.auth.signInWithEmailAndPassword(account['email'], account['password']).then(function (authenticatedUser) {
            });
        });
    };
    /*
    async register(user: User){
  
      try {
        const result = await this.angularAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
        console.log(result);
      } catch (e) {
        console.error(e);
      }
    }*/
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(afStorage, db, camera, toast) {
        this.afStorage = afStorage;
        this.db = db;
        this.camera = camera;
        this.toast = toast;
    }
    //CAPTURA Y BUSQUEDA DE IMAGENES EN DISPOSITIVO
    DataProvider.prototype.captureImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            targetWidth: this.ancho,
                            targetHeight: this.alto,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: this.camera.PictureSourceType.CAMERA,
                            allowEdit: true
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataProvider.prototype.getImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            targetWidth: this.ancho,
                            targetHeight: this.alto,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            saveToPhotoAlbum: false,
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataProvider.prototype.createUploadTask = function (file) {
        var filePath = new Date().getTime() + ".jpg";
        this.fileName = filePath;
        this.image = 'data:image/jpg;base64,' + file;
        this.fileshow = file;
        this.task = this.afStorage.ref(filePath).putString(this.image, 'data_url');
        this.progress = this.task.percentageChanges();
    };
    DataProvider.prototype.uploadHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.captureImage()];
                    case 1:
                        base64 = _a.sent();
                        this.createUploadTask(base64);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.toast.create({
                            message: 'Error: ' + e_1,
                            duration: 2000
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.uploadHandlerGet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getImage()];
                    case 1:
                        base64 = _a.sent();
                        this.createUploadTask(base64);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.toast.create({
                            message: 'Error: ' + e_2,
                            duration: 2000
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //DATOS DE FIREBASE
    DataProvider.prototype.getImg = function (path) {
        return this.afStorage.storage.ref(path).getDownloadURL();
    };
    DataProvider.prototype.getImg2 = function (path) {
        this.uploadFile(event, path);
    };
    DataProvider.prototype.uploadFile = function (event, filePathC) {
        var file = event.target.files[0];
        var filePath = filePathC;
        var task = this.afStorage.upload(filePath, file);
    };
    DataProvider.prototype.addItem = function (item, path) {
        this.ListaJugadores = this.db.list(path);
        return this.ListaJugadores.push(item);
    };
    //Agregar tags custom
    DataProvider.prototype.addItemCustomKey = function (item, path, key) {
        this.ang = this.db.list(path);
        return this.db.object(path).update((_a = {}, _a[key] = item, _a));
        var _a;
    };
    DataProvider.prototype.getItemList = function (path) {
        this.ListaJugadores = this.db.list(path);
        return this.ListaJugadores;
    };
    DataProvider.prototype.valData = function (path) {
        return this.db.list(path + '/Jugadores').valueChanges();
    };
    DataProvider.prototype.editItem = function (item, path) {
        this.ListaJugadores = this.db.list(path);
        return this.ListaJugadores.update(item.key, item);
    };
    DataProvider.prototype.editItemKey = function (item, path, key) {
        this.ListaJugadores = this.db.list(path);
        return this.ListaJugadores.update(key, item);
    };
    DataProvider.prototype.dellItemy = function (path, item) {
        this.ListaJugadores = this.db.list(path);
        return this.ListaJugadores.remove(item.key);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ToastController */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_edit_profile_edit_profile__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// ionic cordova build android --> genera el apk
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, registerProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.registerProvider = registerProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.user = "dcxcv";
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
        this.nav.setRoot(page.component, { 'user': this.user });
    };
    MyApp.prototype.openPageEP = function (data) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario  
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_edit_profile_edit_profile__["a" /* EditProfilePage */], data);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\app\app.html"*/'<ion-menu  [content]="content" swipeEnabled="false">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>Pages</ion-title>\n        </ion-toolbar>\n    </ion-header>\n   \n    <ion-content>\n        <ion-list>\n           <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n            {{p.title}}\n           </button>\n           <!--\n           <button menuClose ion-item>\n                <ion-icon name="settings"></ion-icon>\n                Configuración\n            </button> \n           -->\n           <a menuClose ion-item href="https://github.com/xtelix/ProyectPMUL">\n                <ion-icon name="help-circle"></ion-icon>\n                Ayuda\n            </a>           \n           <button menuClose ion-item icon-start (click)="exitUser()">\n                <ion-icon name="exit"></ion-icon>\n                 Salir\n            </button>\n        </ion-list>\n    </ion-content>\n      \n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\app\app.html"*/
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

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidasJugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(512);
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


/*
  Generated class for the PartidasJugadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PartidasJugadoresProvider = /** @class */ (function () {
    function PartidasJugadoresProvider(http) {
        this.http = http;
        console.log('Hello PartidasJugadoresProvider Provider');
    }
    PartidasJugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PartidasJugadoresProvider);
    return PartidasJugadoresProvider;
}());

//# sourceMappingURL=partidas-jugadores.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_liga_add_liga__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liga_liga__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_register_register__ = __webpack_require__(44);
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
    //d: string = "Dominaria_.jpg";
    function HomePage(navCtrl, db, loadingCtrl, rp, afAuth, toast, dataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.rp = rp;
        this.afAuth = afAuth;
        this.toast = toast;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.email = "";
        this.liga = {
            key: "liga2",
            jorge: "andres"
        };
        //const itemRef = this.db.object('item');
        //this.getFirebase();
        this.getFirebase();
        this.getEmail();
        console.log(Math.floor(Math.random() * (4 - 1) + 1));
        console.log(this.profiledata);
    }
    //toma informacion de firebase
    HomePage.prototype.getFirebase = function () {
        var _this = this;
        this.db.list('/Ligas').valueChanges().subscribe(function (data) {
            //console.log(JSON.stringify(data));
            _this.items = data;
        });
    };
    //Elimina la liga pasada por parametro del firebase
    HomePage.prototype.delLiga = function (l) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar cambios',
            message: 'Quiere borrar la liga de ' + l.nombre + '?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        alert.present();
                        var lig = _this.db.list("Ligas/");
                        lig.remove(l.nombre).then(function (c) {
                            console.log("Borrado");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    //get correo del usuario registrado, anonimo si no hay defecto
    HomePage.prototype.getEmail = function () {
        if (this.rp.valEmail()) {
            this.email = this.rp.getEmailUser();
        }
        else
            this.email = "Anonimo";
    };
    HomePage.prototype.irLiga = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__liga_liga__["a" /* LigaPage */], item);
    };
    HomePage.prototype.irPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.irPageParams = function (param) {
        if (param.user == null) {
            alert("Este usuario no tiene un perfil");
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfilePage */], param);
        }
    };
    //Mensaje de bienvenida para usuariosautenticados
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Bienvenido " + data.email,
                    duration: 3000
                }).present();
                _this.profiledata = _this.db.object("perfil/" + data.uid).valueChanges();
                _this.profiledata.subscribe(function (val) {
                    _this.profile = {
                        user: val,
                        userId: data.uid,
                        email: _this.email
                    };
                });
            }
            else {
                _this.toast.create({
                    message: 'No se encuentra autenticado',
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.addLiga = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__add_liga_add_liga__["a" /* AddLigaPage */], this.profile);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cuenta {{email}}     \n    </ion-title>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items" >\n        <ion-thumbnail item-start (click)="irLiga(item)">\n          <img src="{{item.img}}"/>\n        </ion-thumbnail>\n      <!-- <button ion-button clear item-end (click)="irLiga(item)">View</button> -->\n          <div (click)="irLiga(item)"> \n            <h2>{{item.nombre}}</h2>\n            <p>Fecha de inicio {{item.fecha}}</p> \n          </div>  \n      <button ion-button icon-only clear large item-end (click)="delLiga(item)">\n        <ion-icon name="close" color="danger"></ion-icon>\n      </button>  \n    </ion-item> \n  </ion-list>\n</ion-content>\n<div class="tabs-bar">\n  <button ion-button icon-only clear large (click)="addLiga()">\n      <!-- <ion-icon name="add-circle" ></ion-icon> -->\n      <span>Crear Liga</span>\n    </button>\n    <button ion-button icon-only clear large (click)="irPageParams(profile)" item-end>\n      <!-- <ion-icon name="person" ></ion-icon> -->\n      <span>Editar Perfil</span>\n    </button>\n</div>\n\n\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(51);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, dbProvider, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbProvider = dbProvider;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.user = navParams.data;
        if (navParams.data.user == null) {
            this.user.user = {
                email: "",
                firstName: "",
                lastName: "",
                imgProfile: ""
            };
        }
        console.log(navParams.data);
        console.log(this.user);
        this.dbProvider.ancho = 125;
        this.dbProvider.alto = 125;
        this.loadImg();
        //console.log(navParams.data); 
        //console.log(this.user.subscribe(val => console.log(val)));      
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.loadImg = function () {
        var _this = this;
        try {
            this.dbProvider.getImg(this.user.user.imgProfile).then(function (url) {
                _this.meta = url;
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    //ACTUALIZA DATOS DE PERFIL DE USUARIO
    EditProfilePage.prototype.updateProfile = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar cambios',
            message: 'Quiere realizar los cambios?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.user.user.imgProfile = _this.dbProvider.fileName;
                        _this.dbProvider.editItemKey(_this.user.user, "perfil/", _this.user.userId).then(function (ref) {
                            //console.log (ref.key);
                            _this.toast.create({
                                message: 'Actualizando',
                                duration: 2000
                            }).present();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    //TOMA LA IMAGEN DEL PERFIL DEL USUARIO ACTUAL
    EditProfilePage.prototype.takeProfileImage = function () {
        try {
            this.dbProvider.uploadHandler();
        }
        catch (e) {
            this.toast.create({
                message: 'Error: ' + e,
                duration: 2000
            }).present();
        }
    };
    //OBTIENE LA IMAGEN DEL PERFIL DEL USUARIO ACTUAL
    EditProfilePage.prototype.getProfileImage = function () {
        try {
            this.dbProvider.uploadHandlerGet();
        }
        catch (e) {
            this.toast.create({
                message: 'Error: ' + e,
                duration: 2000
            }).present();
        }
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Perfil personal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-content padding text-center >\n    <ion-avatar Margin="center">\n      <img src="{{meta}}" alt="profileImage"/>\n    </ion-avatar>\n    <ion-item no-lines>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="user.user.firstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Apellido</ion-label>\n      <ion-input type="text" [(ngModel)]="user.user.lastName"></ion-input>\n    </ion-item>\n    <ion-label stacked>Cambiar imagen de perfil</ion-label>\n    <ion-grid >\n      <ion-row>\n        <ion-col col-6 >\n          <button ion-button block (click)="takeProfileImage()">\n            Camara\n          </button>      \n        </ion-col>\n        <ion-col col-6 >\n          <button ion-button block (click)="getProfileImage()">\n            Galeria\n          </button>      \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button outline block (click)="updateProfile()" class="col-12" >\n            Actualizar Perfil\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="dbProvider.image" style="margin-top: 40px;">\n        <ion-col col-12>\n          <ion-label stacked>Nueva foto de perfil {{dbProvider.fileName}}</ion-label>\n          <img [src]="dbProvider.image"/>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>  \n</ion-content>\n'/*ion-inline-end:"C:\Users\xtelix\Desktop\IonicProjects\LigaSellado\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map