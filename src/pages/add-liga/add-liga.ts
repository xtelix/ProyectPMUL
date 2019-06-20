import { Camera } from '@ionic-native/camera';
import { Liga } from './../../models/player-item/league-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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
  pathTemp: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public camera: Camera,
              public toast: ToastController,
              public dp: DataProvider) {

    this.profile = navParams.data;

    this.dp.image = "";
    this.dp.ancho = 800;
    this.dp.alto = 650;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLigaPage');
  }

  myDate: string = new Date().toDateString();

  //SUBIR IMAGEN
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
       item.nombre != "" && item.nombre != null){
      return true;
    }else return false;
  }

  loadImg(imgName){  
    try {
      this.dp.getImg(imgName).then((url)=>{     
        this.pathTemp = url;
      });
    } catch (error) {
    }
  }

  //GUARDA UNA LIGA EN FIREBASE
  crearLiga(path: string){
  this.loadImg(this.dp.fileName);
  this.liga = {
    nombre: this.nombre,
    img: this.pathTemp,
    img_: this.pathTemp,
    fecha: this.myDate
  };

  console.log(this.liga);
    if(this.valLiga(this.liga)){
      if(this.liga.img != "" && this.liga.img != null){
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
          message: "Seleccione una imagen",
          duration: 3000
        }).present();
      }
    }else{
      this.toast.create({
        message: "Hay campos vacios",
        duration: 3000
      }).present();
    }
  }
      
}
