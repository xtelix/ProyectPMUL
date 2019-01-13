import { LigaPage } from './../liga/liga';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from 'angularfire2/database';
import { Component, Provider } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { RegisterProvider } from '../../providers/register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //itemsRef: AngularFireList<any>;
  //lista: Observable<any[]>;
  items;
  email: string = "";

  //item: string;

  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase,
              public loadingCtrl: LoadingController,
              public rp: RegisterProvider) {
    //const itemRef = this.db.object('item');
    //this.getFirebase();
    this.getFirebase();
    this.getEmail();
  }
  //Get info from firebase
  getFirebase(){
    this.db.list('/').valueChanges().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.items = data;
      }
    );
  }

  getEmail(){    
    if(this.rp.valEmail()){
      this.email = this.rp.getEmailUser();
    }
    else this.email = "Anonimo";
  }

  irLiga(item:any){
    
    this.navCtrl.push(LigaPage, item).then(m => {
     
    });
    
  }

  irPage(page:string){
    this.navCtrl.push(page);
  }

}
