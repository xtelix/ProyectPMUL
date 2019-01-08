import { HomePage } from './../../pages/home/home';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(public angularAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
    //console.log('Hello RegisterProvider Provider');
  }

  createUser(email:string, password:string){

      this.angularAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((res:any) => console.log(res))
      .catch((error:any)=> console.error(error));

  }

  loginUserService(email: string, password: string): any {
    return this.angularAuth.auth.signInWithEmailAndPassword(email,password);
  }


  signupUserService(account: {}){
 
    return this.angularAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
      //sign in the user
      this.angularAuth.auth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
        //successful login, create user profile
      /*this.userProfile.child(authenticatedUser.uid).set(
        account
      );*/
      });
    });

  }



/*
  showAlertCreateUser() {
    const alert = this.alertCtrl.create({
      title: 'Usuario creado',
      subTitle: 'Ya se encuentra registrado',
      buttons: [{
        text: 'OK',
        handler: () => {
          
        }
      }]
    });
    alert.present();
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Usuario creado',
      subTitle: 'Ya se encuentra registrado',
      buttons: ['OK']
    });
    alert.present();
  }*/
  
  canLog:boolean;
  
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

  public logout() {
    this.angularAuth.auth.signOut();
  }
}
