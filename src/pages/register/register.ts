import { RegisterProvider } from './../../providers/register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public rp: RegisterProvider) {
  }

  email: string;
  password: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  irBack(){
    this.navCtrl.pop();
  }

  mostrar(){
    console.log(this.email);
    console.log(this.password);
  }

}
