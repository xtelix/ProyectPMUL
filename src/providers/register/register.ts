import { HomePage } from './../../pages/home/home';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(public angularAuth: AngularFireAuth) {
    //console.log('Hello RegisterProvider Provider');
  }

  createUser(email:string, password:string){

      this.angularAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((res:any) => console.log(res))
      .catch((error:any)=> console.error(error));
      
  }

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

  logout() {
    this.angularAuth.auth.signOut();
  }
}
