import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { FavoriteServiceProvider } from "./favorite.service";
import { FavoriteModel } from "./favorite.model";
/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favorite: FavoriteModel = new FavoriteModel();
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteServiceProvider:FavoriteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    this.getFavoriteData();
  }
  getFavoriteData() {
    this.favoriteServiceProvider.getFavorite().then((data) => {
      this.favorite = data; ///////////////////// บรรทัดนี้ตอนแรกยังไม่มี มาเขียนเพิ่มตอนที่จะไปโชว์ที่หน้าจอ ตามขั้นตอนด้านล่าง
      console.log(data);
    },(error) => {
      console.error(error);
    });
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
   }

}
