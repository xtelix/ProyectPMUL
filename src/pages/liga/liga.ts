import { PartidaPage } from './../partida/partida';
import { HomePage } from './../home/home';
import { Player } from './../../models/player-item/player-item';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { VariableAst } from '@angular/compiler';
import { RegisterProvider } from '../../providers/register/register';

/**
 * Generated class for the LigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liga',
  templateUrl: 'liga.html',
  //template: `<pre><code>{{ meta | async }}</code></pre>`
})
export class LigaPage {

  item:any;   
  meta:any;
  email:string;
  player:Player;
  players:Player[];
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public rp: RegisterProvider,
              public alertCtrl: AlertController) {
  this.item = navParams.data;
  //this.getImg(this.item.img);
  this.loadImg();
  this.getEmail();
  
  this.player = {  
    email: this.email,
    partidas: 0,
    victorias: 0
  };

  this.cargarJugadores(this.item.nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LigaPage');
  }

  loadImg(){   
    this.dataProvider.getImg(this.item.img).then((url)=>{     
      this.meta = url;
    });
  }

  getEmail(){    
    if(this.rp.valEmail()){
      this.email = this.rp.getEmailUser();
    }
    else this.email = "Anonimo";
  }

  participar(item:Player){
    
    if(this.val() < 1){
      this.dataProvider.addItem(item,this.item.nombre).then ( ref =>{
        console.log (ref.key);
        }
      );
    }else {
      this.showAlert();
    }
  }
  
  cargarJugadores(liga:string){  
    this.dataProvider.valData(liga).subscribe(
      data => {     
        this.players = data;
      }
    );  
  }

  val(): number{
    var num = 0;
    for (let element of this.players){    
      if(element.email == this.email){
        num++;        
      }
    }
    return num;
  }

  newGame(){
    this.navCtrl.push(PartidaPage,this.item);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ya esta participando!',
      subTitle: 'Ahora mismo usted esta registrado en la liga de ' +this.item.nombre,
      buttons: ['OK']
    });
    alert.present();
  }

}
