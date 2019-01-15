import { ProfilePage } from './../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//importamos las paginas 
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { LigaPage } from './../pages/liga/liga';
import { PartidaPage } from './../pages/partida/partida';

//import providers
import { RegisterProvider } from '../providers/register/register';
import { DataProvider } from './../providers/data/data';

//Firebase imports
import { AngularFireModule, FirebaseAuth } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { PartidasJugadoresProvider } from '../providers/partidas-jugadores/partidas-jugadores';

//Datos del proyecto en firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCQdjZm87dVyOSHjXV3QxsN3H1UNq6Vj4U",
  authDomain: "ligas-ionic.firebaseapp.com",
  databaseURL: "https://ligas-ionic.firebaseio.com",
  projectId: "ligas-ionic",
  storageBucket: "ligas-ionic.appspot.com",
  messagingSenderId: '63471547844'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LigaPage,
    PartidaPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Indicamos los imports de firebase en NgModule
    //iniciamos la app con la constante del proyecto de firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LigaPage,
    PartidaPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterProvider,
    DataProvider,
    PartidasJugadoresProvider
  ]
})
export class AppModule {}
