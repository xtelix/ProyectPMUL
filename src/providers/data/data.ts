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
              public db: AngularFireDatabase) {

  }
  
  private ListaJugadores;
  private ang: AngularFireList<any>;

  getImg(path:string):Promise<any>{
    return this.afStorage.storage.ref(path).getDownloadURL();
  }
  
  addItem(item:any, path:string){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores.push(item);
  }

  //Agregar tags custom
  addItemCustomKey(item:any, path:string){
    this.ang = this.db.list<any>(path);
    this.db.object(`/`).update({[item.key]: true});
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
