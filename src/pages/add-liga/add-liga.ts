import { FirebaseStorage } from 'angularfire2';
import { AngularFireDatabase } from '@angular/fire/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Liga } from './../../models/player-item/league-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { initializeApp, storage } from 'firebase';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { diPublic } from '@angular/core/src/render3/instructions';

/**
 * Generated class for the AddLigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-liga',
  templateUrl: 'add-liga.html',
})
export class AddLigaPage {

  profile: any;
  
  fecha: string;
  nombre: string = "";

  dia: string;
  mes: string;
  ruta: string = "Ligas/";

  liga: Liga;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public camera: Camera,
              public toast: ToastController,
              public dp: DataProvider) {

    this.profile = navParams.data;
    this.currentDate();
    this.dp.ancho = 800;
    this.dp.alto = 650;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLigaPage');
  }

  currentDate(){
    var today = new Date();
    var dd = today.getDay();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      this.dia = '0' + dd;
    }

    if (mm < 10) {
      this.mes = '0' + mm;
    }

    this.fecha = this.mes + '/' + this.dia + '/' + yyyy;
    //document.write(this.fecha);
  }

  uploadImg(){
    try{
    this.dp.uploadHandlerGet();
    }catch(e){
      this.toast.create({
        message: 'Error: ' +e,
        duration: 2000
      }).present();
    }
  }
   
  valLiga(item: Liga): boolean{

    if(item.fecha != "" && item.fecha != null &&
       item.img != "" && item.img != null &&
       item.nombre != "" && item.nombre != null){
      return true;
    }else return false;
  }

  crearLiga(path: string){

  this.liga = {
    nombre: this.nombre,
    img: this.dp.fileName,
    img_: this.dp.fileName,
    fecha: this.fecha
  };

  console.log(this.liga);
    if(this.valLiga(this.liga)){
    this.dp.addItemCustomKey(this.liga,path,this.liga.nombre).then(()=>{
      this.toast.create({
        message: 'Liga creada exitosamente!',
        duration: 3000
      }).present();
    }).catch(err =>{
      this.toast.create({
        message: err,
        duration: 3000
      }).present();
    });
    }else{
      this.toast.create({
        message: "Hay campos vacios",
        duration: 3000
      }).present();
    }
  }
      
}
