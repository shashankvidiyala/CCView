import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',

})
export class PopoverPage {

  constructor(public afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }
close() {
    this.viewCtrl.dismiss();
  }
  logout(){
  this.afAuth.auth.signOut();
  this.viewCtrl.dismiss();
  
  }

}
