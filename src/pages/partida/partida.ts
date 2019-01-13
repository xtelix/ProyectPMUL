import { DataProvider } from './../../providers/data/data';
import { RegisterProvider } from './../../providers/register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailValidator } from '@angular/forms';

/**
 * Generated class for the PartidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partida',
  templateUrl: 'partida.html',
})
export class PartidaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public rp:RegisterProvider) {
    this.ligaData = navParams.data;
    this.getEmail();
  }

  ligaData:any;
  email:string;
  emailOp:string;
  ganador:string;
  game:any;
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidaPage');
  }

  saveData(){
    this.game = {  
      email: this.email,
      emailOP: this.emailOp,
      ganador: this.ganador
    };

    this.participar(this.game);
  }

  participar(item:any){
       
      this.dataProvider.addItem(item,this.ligaData.nombre+'/Partidas').then ( ref =>{
        console.log (ref.key);
        }
      );   
  }

  val(){

  }

  getEmail(){    
    if(this.rp.valEmail()){
      this.email = this.rp.getEmailUser();
    }
    else this.email = "Anonimo";
  }


  clearData(){
    console.log(this.game);
  }
}
