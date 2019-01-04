import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //itemsRef: AngularFireList<any>;
  //lista: Observable<any[]>;
  items;
  //item: string;

  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase) {
    //const itemRef = this.db.object('item');
    //this.getFirebase();
    this.getFirebase2();
             
  }
  //Get info from firebase
  getFirebase2(){
    this.db.list('/').valueChanges().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.items = data;
      }
    );
  }

  getFirebase(){
    this.db.list('/').valueChanges().subscribe(
      data => {
        console.log(data);
        this.items = data;
      }
    );
  }

}
