import { Injectable } from '@angular/core';
import { NavController,App } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { CamsPage } from '../../pages/cams/cams'
@Injectable()
export class AuthserviceProvider {

  navCtrl:NavController;
  flag:boolean;
  constructor(public afireauth: AngularFireAuth,public app:App ) {
    this.navCtrl=app.getActiveNav();
    this.monitorState();
    
  }
  monitorState(){
    this.afireauth.authState.subscribe(res => {
           if (res && res.uid) {
          this.navCtrl.push(CamsPage);
       } else {
         this.navCtrl.popToRoot();
        }
      });
  }
  login(email,pass){
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(email,pass).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    });
 
    return promise;
    
  }
  register(email,pass){
 var k= new Promise((resolve,reject)=>{
    this.afireauth.auth
      .createUserWithEmailAndPassword(email,pass)
      .then(() => {
        resolve(true);
      }).catch((err) => {
        console.log(err);
        reject(err);
       })
    });
    return k;

  }
  signInWithFacebook() {
    var k= new Promise((resolve,reject)=>{
    this.afireauth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    });
    return k;

  }
  signInWithGoogle() {
    var k= new Promise((resolve,reject)=>{
    this.afireauth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    });
    return k;

  }
  signOut(){
    this.afireauth.auth.signOut();
  }
  

}


