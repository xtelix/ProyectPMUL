import { HomePage } from './../home/home';
import { RegisterProvider } from './../../providers/register/register';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { bloomAdd } from '@angular/core/src/render3/di';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public rp: RegisterProvider) {
  }

  email:string;
  password: string;

  ionViewDidLoad() {
  }

  irRegistro(){
    this.navCtrl.push(RegisterPage);
  }

  isRegister(){
    
  this.rp.angularAuth.auth.signInWithEmailAndPassword(this.email,this.password)
  .then((res:any) => { 
    console.log("Bienvenido " +res );  
    this.navCtrl.push(HomePage); 
  })
  .catch((error:any)=> {
    console.error("Error: " +error ); 
  });
    
  }
}
