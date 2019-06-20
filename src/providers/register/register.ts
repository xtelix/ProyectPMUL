import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
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

  getEmailUser(): any {
    return this.angularAuth.auth.currentUser.email.toString();
  }

  valEmail(): boolean{
    if(this.angularAuth.auth.currentUser == null) return false;
    else return true;   
  }

  signupUserService(account: {}){
 
    return this.angularAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
      this.angularAuth.auth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
      });
    });
  }
  canLog:boolean;

  /*
  async register(user: User){

    try {
      const result = await this.angularAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }*/

  public logout() {
    this.angularAuth.auth.signOut();
  }
}
