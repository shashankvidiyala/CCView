import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-cams',
  templateUrl: 'cams.html',
  providers:[AngularFireDatabase]
})
export class CamsPage {
  item: FirebaseListObservable<any>;
  Urls: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl:PopoverController,public afireauth:AngularFireAuth,public afiredb:AngularFireDatabase ) {
    this.Urls=this.afiredb.object('user/'+this.afireauth.auth.currentUser.uid);
      this.Urls.set({URI:"Google"});
    
    }

  ionViewDidLoad() {
    
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
    
  }

}
