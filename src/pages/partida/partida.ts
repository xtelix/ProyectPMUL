import { Player } from './../../models/player-item/player-item';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { DataProvider } from './../../providers/data/data';
import { RegisterProvider } from './../../providers/register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmailValidator } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { templateJitUrl } from '@angular/compiler';


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
              public rp:RegisterProvider,
              public db: AngularFireDatabase,
              public toast: ToastController) {
    this.ligaData = navParams.data;
    this.getEmail();
    this.itemsRef = db.list("Ligas/"+this.ligaData.nombre+'/Jugadores');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.items.subscribe( c => {
      this.players = c;
      this.searchPlayer(this.players);
    });
  }

  ligaData:any;
  email:string;
  emailOp:string;
  ganador:string;
  game:any;
  
  jugadoresData:any;
  player:Player;
  players:Player[];

  itemsRef : AngularFireList<Player[]>;
  items: Observable<any[]>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidaPage');
  }

  saveData(){
    if(this.val()){
    this.game = {  
      email: this.email,
      emailOP: this.emailOp,
      ganador: this.ganador
    };

    this.participar(this.game);
    }else {
      this.toast.create({
        message: 'Faltan campos requeridos',
        duration: 3000
      }).present();
    }
  }

  participar(item:any){
       
      this.dataProvider.addItem(item,'Ligas/'+this.ligaData.nombre+'/Partidas').then ( ref =>{
        console.log (ref.key);
        //this.dataProvider.editItem(this.player, '/'+this.ligaData.nombre+'/Jugadores');
      });
      
      this.player.partidas++;
      if(item.ganador == item.email){
        this.player.victorias++;   
      }  
      //console.log(this.player); 
      
      this.dataProvider.editItem(this.player,'Ligas/'+this.ligaData.nombre+'/Jugadores').then(ref =>{
        //console.log (ref.key);
      });
           
  }

  val(): boolean{
    if(this.email != null && this.emailOp != null && this.ganador != null){
      return true;
    }return false;
        
  }

  getEmail(){    
    if(this.rp.valEmail()){
      this.email = this.rp.getEmailUser();
    }
    else this.email = "Anonimo";
  }

  getFirebase(){
    
    this.db.list('Ligas/'+this.ligaData.nombre+'/Jugadores').valueChanges().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.jugadoresData  = data;
        this.searchPlayer(this.jugadoresData);
      }
    );
    //console.log(JSON.stringify(this.jugadoresData));
    
  }

  searchPlayer(lista: Player[]){
    for (let i of lista) {
      if(i.email == this.email){
        this.player = i;
        console.log(i.key);       
      }
      //console.log(this.player.key +' ' +this.email); 
   }
  }

  clearData(){
    console.log(this.game);
    console.log(this.items);
    console.log(this.player);
  
  }

}
