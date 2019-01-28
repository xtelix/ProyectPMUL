import { AddLigaPage } from './../add-liga/add-liga';
import { Liga } from './../../models/player-item/league-item';
import { DataProvider } from './../../providers/data/data';
import { EditProfilePage } from './../edit-profile/edit-profile';
import { LigaPage } from './../liga/liga';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from 'angularfire2/database';
import { Component, Provider } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { RegisterProvider } from '../../providers/register/register';
import{ AngularFireObject } from 'angularfire2/database';
import { Perfil } from './../../models/player-item/userProfile-items';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //itemsRef: AngularFireList<any>;
  //lista: Observable<any[]>;
  items;
  email: string = "";
 //profileData: AngularFireObject<Perfil>
  profiledata: Observable<any>;
  profile: any;
  meta:string;
  //item: string;
 d: string = "Dominaria_.jpg";
  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase,
              public loadingCtrl: LoadingController,
              public rp: RegisterProvider,
              public afAuth: AngularFireAuth,
              public toast: ToastController,
              public dataProvider: DataProvider,
              public alertCtrl: AlertController) {
    //const itemRef = this.db.object('item');
    //this.getFirebase();
    this.getFirebase();
    this.getEmail();
    console.log(Math.floor(Math.random()*(4 - 1) + 1));
    //this.loadImg("Dominaria_.jpg");
  }
  //toma informacion de firebase
  getFirebase(){
    this.db.list('/Ligas').valueChanges().subscribe(
      data => {
        //console.log(JSON.stringify(data));
        this.items = data;
      }
    );
  }

  //Elimina la liga pasada por parametro del firebase
  delLiga(l:Liga){

    let alert = this.alertCtrl.create({
      title: 'Confirmar cambios',
      message: 'Quiere borrar la liga de '+l.nombre +'?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            alert.present();

            let lig = this.db.list<any>("Ligas/")
            lig.remove(l.nombre).then(c => {
              console.log("Borrado");
            });
          }
        }
      ]
    });
    alert.present();
  }

  //get correo del usuario registrado, anonimo si no hay defecto
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

  irPageParams(param:any){
    
    this.navCtrl.push(EditProfilePage, param);
  }

  //Mensaje de bienvenida para usuariosautenticados
  ionViewWillLoad(){
   this.afAuth.authState.take(1).subscribe(data => {
    if(data && data.email && data.uid){
      this.toast.create({
        message: `Bienvenido ${data.email}`,
        duration: 3000
      }).present();

      this.profiledata = this.db.object(`perfil/${data.uid}`).valueChanges();
      this.profiledata.subscribe(val => {
        this.profile = {
          user: val,
          userId: data.uid,
          email: this.email
        };
      });

      
    }else{
      this.toast.create({
        message: 'No se encuentra autenticado',
        duration: 3000
      }).present();
    }
   });
  }

  liga:any = {
    key: "liga2",
    jorge: "andres"
  }

  addLiga(){

    this.navCtrl.push(AddLigaPage, this.profile);

  }
  
}
