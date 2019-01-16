import { map } from 'rxjs/operators';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
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
  email:string = this.getEmail();
  participando: boolean = false;
  participantes: number;

  players:Player[];
  
  itemsRef : AngularFireList<Player[]>;
  items: Observable<any[]>;

  player:Player = {  
    email: this.email,
    partidas: 0,
    victorias: 0
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public rp: RegisterProvider,
              public alertCtrl: AlertController,
              public db: AngularFireDatabase) {
  this.item = navParams.data;
  //this.getImg(this.item.img);
  this.loadImg();

  this.itemsRef = db.list("Ligas/"+this.item.nombre+'/Jugadores');
  // Use snapshotChanges().map() to store the key
  this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
  this.items.subscribe( c => {
    this.players = c;
    this.participantes = this.players.length;
    this.searchPlayer(this.players);
  });
  }

  searchPlayer(lista: Player[]){
    for (let i of lista) {
      if(i.email == this.email){
        this.player = i;
        this.participando = true;
        console.log(this.player);
        console.log(i.key);       
      }
      //console.log(this.player.key +' ' +this.email); 
   }
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
      return this.rp.getEmailUser();
    }
    else return "Anonimo";
  }

  participar(item:Player){
    
    if(this.val()){
      this.dataProvider.addItem(item,'Ligas/'+this.item.nombre+'/Jugadores').then ( ref =>{
        
        console.log (ref.key);
        }
      );
    }else {
      this.showAlert('Ya esta participando!','Ahora mismo usted esta registrado en la liga de ');
    }
  }

  abandonar(p:Player){
    this.dataProvider.dellItemy('Ligas/'+this.item.nombre+'/Jugadores',p).then(ref =>{
      console.log (p);
      this.navCtrl.setRoot(HomePage);
    });
         
  }

  val(): boolean{
    var num = 0;
    for (let element of this.players){    
      if(element.email == this.email){
        num++;        
      }
    }

    if(num < 1){
      return true;
    } return false;
    
  }

  newGame(){
    if(!this.val()){
    this.navCtrl.push(PartidaPage,this.item);
    }else this.showAlert('Debe participar', 'Para crear una partida tiene que participar antes en');

  }

  showAlert(titulo:string, subtitulo:string) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo +' ' +this.item.nombre,
      buttons: ['OK']
    });
    alert.present();
  }

}
