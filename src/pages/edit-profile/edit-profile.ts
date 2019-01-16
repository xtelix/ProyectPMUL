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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public dbProvider: DataProvider,
              public alertCtrl: AlertController,
              public toast: ToastController,
              private camera: Camera) {
      this.user = navParams.data; 
      console.log(this.user);
   
      //console.log(navParams.data); 
      //console.log(this.user.subscribe(val => console.log(val)));      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
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

  setProfileImage(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
