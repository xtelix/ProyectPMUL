import { RegisterProvider } from './../providers/register/register';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// ionic cordova build android --> genera el apk
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  pages:Array<{title: string, component:any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public registerProvider: RegisterProvider) {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: HomePage}   
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  user:string = "dcxcv";
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario  
    this.nav.setRoot(page.component, {'user': this.user});
    }

  openPageEP(data:any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario  
    this.nav.push(EditProfilePage,data);
    }

  exitUser() {
    this.registerProvider.logout();
    this.nav.setRoot(LoginPage);
  }

  
}

