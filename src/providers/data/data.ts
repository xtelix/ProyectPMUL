import { Player } from './../../models/player-item/player-item';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

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

  getImg(path:string):any{
    return this.afStorage.storage.ref(path).getDownloadURL();
  }
  
  addItem(item:any, path:string){
    this.ListaJugadores = this.db.list<any>(path);
    return this.ListaJugadores.push(item);
  }

  valData(path:string): any{
    return this.db.list(path +'/Jugadores').valueChanges();
  }
}
