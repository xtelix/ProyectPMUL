import { ProfilePage } from './../profile/profile';
import { RegisterProvider } from './../../providers/register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
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
              public rp: RegisterProvider,
              public toastCtrl: ToastController, 
              public loadingCtrl: LoadingController) {
  }
  
  public email: string;
  public password: string;

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

  doSignup(){

    var account = {
      email: this.email,
      password: this.password,
    };
    var that = this;

    if (this.email != null && this.password != null){

    var loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    loader.present();

  	this.rp.signupUserService(account).then(authData => {
  		//successful
  		loader.dismiss();
  		that.navCtrl.setRoot(ProfilePage);

  	}, error => {
    loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      that.password = ""//empty the password field

  	});
  }else {
            
    let toast = this.toastCtrl.create({
      message: 'Hay campos vacios',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
    
  }


}
