import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariableAst } from '@angular/compiler';

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
})
export class LigaPage {

  item:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  this.item = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LigaPage');
  }

}
