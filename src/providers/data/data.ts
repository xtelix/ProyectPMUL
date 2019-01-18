import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Player } from './../../models/player-item/player-item';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
 
  constructor(public afStorage: AngularFireStorage,
              public db: AngularFireDatabase,
              public camera: Camera,
              public toast: ToastController) {

  }
  

  private ListaJugadores;
  private ang: AngularFireList<any>;

  task: any;

  progress: any;  // Observable 0 to 100

  image: string; // base64
  fileshow:string;
  public fileName: string;
  public ancho: number;
  public alto: number;
  /*
        quality: 70,
      targetWidth: 600,
      targetHeight: 450,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
  */
    async captureImage() {
      const options: CameraOptions = {
        quality: 70,
        targetWidth: this.ancho,
        targetHeight: this.alto,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: true
      }

      return await this.camera.getPicture(options)  
  }
  async getImage() {
    
    const options: CameraOptions = {
      quality: 70,
      targetWidth: this.ancho,
      targetHeight: this.alto,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      
    }

    return await this.camera.getPicture(options)    
}

  createUploadTask(file: string): void {

    const filePath = `${ new Date().getTime() }.jpg`;
    this.fileName = filePath;
    this.image = 'data:image/jpg;base64,' + file;
    this.fileshow = file;
    this.task = this.afStorage.ref(filePath).putString(this.image, 'data_url');

    this.progress = this.task.percentageChanges();
  }

  async uploadHandler() {
    try{
  const base64 = await this.captureImage();
  this.createUploadTask(base64);
  }catch(e){
    this.toast.create({
      message: 'Error: ' +e,
      duration: 2000
    }).present();
  }
}

  async uploadHandlerGet() {
    try{
    const base64 = await this.getImage();
    this.createUploadTask(base64);
    }catch(e){
      this.toast.create({
        message: 'Error: ' +e,
        duration: 2000
      }).present();
    }
  }

  getImg(path:string):Promise<any>{
    return this.afStorage.storage.ref(path).getDownloadURL();
  }

  getImg2(path:string){
    
    this.uploadFile(event,path);
  }
  
  uploadFile(event, filePathC:string) {
    const file = event.target.files[0];
    const filePath = filePathC;
    const task = this.afStorage.upload(filePath, file);
  }

  addItem(item:any, path:string){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores.push(item);
  }

  //Agregar tags custom
  addItemCustomKey(item:any, path:string, key:any){
    this.ang = this.db.list<any>(path);
    return this.db.object(path).update({[key]: item});
  }

  getItemList(path:string){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores;
  }

  valData(path:string): any{
    return this.db.list(path +'/Jugadores').valueChanges();
  }

  editItem(item:any, path:string){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores.update(item.key, item);
  }

  editItemKey(item:any, path:string, key:any){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores.update(key, item);
  }

 dellItemy(path:string, item:Player){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores.remove(item.key);
  }
}
