import { FirebaseStorage } from 'angularfire2';
import { HomePage } from './../home/home';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  user:any;
  myPhoto:any;
  meta: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public dbProvider: DataProvider,
              public alertCtrl: AlertController,
              public toast: ToastController) {
      this.user = navParams.data; 
      console.log(this.user);
      this.dbProvider.ancho = 125;
      this.dbProvider.alto = 125;
      this.loadImg();
      //console.log(navParams.data); 
      //console.log(this.user.subscribe(val => console.log(val)));      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  loadImg(){   
    this.dbProvider.getImg(this.user.user.imgProfile).then((url)=>{     
      this.meta = url;
    });
  }

  updateProfile(){
    let alert = this.alertCtrl.create({
      title: 'Confirmar cambios',
      message: 'Quiere realizar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.user.user.imgProfile = this.dbProvider.fileName;
            this.dbProvider.editItemKey(this.user.user, "perfil/", this.user.userId).then(ref =>{
              //console.log (ref.key);
              this.toast.create({
                message: 'Actualizando',
                duration: 2000
              }).present();
              this.navCtrl.setRoot(HomePage);
            });
          }
        }
      ]
    });
    alert.present();
  }

  takeProfileImage(){
    try{
      this.dbProvider.uploadHandler();   
    }catch(e){
      this.toast.create({
        message: 'Error: ' +e,
        duration: 2000
      }).present();
    }

    
  }

  getProfileImage(){
    try{
    this.dbProvider.uploadHandlerGet();
    }catch(e){
      this.toast.create({
        message: 'Error: ' +e,
        duration: 2000
      }).present();
    }  
  }
}
