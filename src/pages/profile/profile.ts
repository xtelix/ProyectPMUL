import { HomePage } from './../home/home';
import { AngularFireDatabase } from '@angular/fire/database';
import { Perfil } from './../../models/player-item/userProfile-items';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  perfil = {} as Perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {
    this.perfil.imgProfile = "profile"+Math.floor(Math.random()*(5 - 1) + 1)+".png";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
        .then(()=> this.navCtrl.push(HomePage));
    });
  }
}
