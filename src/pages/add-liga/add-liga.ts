import { Liga } from './../../models/player-item/league-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  liga: Liga;
  fecha: string;
  dia: string;
  mes: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.profile = navParams.data;
    this.currentDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLigaPage');
  }

  currentDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      this.dia = '0' + dd;
    }

    if (mm < 10) {
      this.mes = '0' + mm;
    }

    this.fecha = this.mes + '/' + this.dia + '/' + yyyy;
    document.write(this.fecha);
  }

}
