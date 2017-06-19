import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { CamsPage } from '../cams/cams'
import { AuthserviceProvider } from '../../providers/authservice/authservice'
import { LoadingController } from 'ionic-angular'
import { AndroidPermissions } from '@ionic-native/android-permissions';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:string;
  pass:string;
  constructor(private androidPermissions: AndroidPermissions,public navCtrl: NavController,public alertCtrl: AlertController,public authservice:AuthserviceProvider,public ldcntrl:LoadingController) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.INTERNET).then(
      success => console.log('Permission granted'),
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.INTERNET)
    ).catch(()=>{});
  }
  
  
  loginwithemail(){
    
    let load = this.ldcntrl.create({
    content: 'Wait verifying username and password'
  });
  load.present();
   this.authservice.login(this.email,this.pass).then((res: any) => {
     console.log("Click\n");
      if (!res.code){
        load.dismiss();
      }
      
        
    }).catch(()=>{
       load.dismiss();
        let k=this.alertCtrl.create({
          title :"Wrong Password or UserName",
          message: "Re-enter UserName and Pssword and try again"
        });
        k.present();
      }

    )
    
   
    
  }
  loginwithfb(){
     let load = this.ldcntrl.create({
    content: 'Wait verifying username and password'
  });
  load.present();
   this.authservice.signInWithFacebook().then((res: any) => {
      if (!res.code){
        load.dismiss();
      }
      
        
    }).catch(()=>{
       load.dismiss();
        let k=this.alertCtrl.create({
          title :"Failed Attemp",
          message: "Re-enter UserName and Password and try again"
        });
        k.present();
      }

    )
   
  }
  loginwithgoogle(){
     let load = this.ldcntrl.create({
    content: 'Wait verifying username and password'
  });
  load.present();
   this.authservice.signInWithGoogle().then((res: any) => {
      if (!res.code){
        load.dismiss();
      }
      
        
    }).catch(()=>{
       load.dismiss();
        let k=this.alertCtrl.create({
          title :"Failed Attemp",
          message: "Re-enter UserName and Password and try again"
        });
        k.present();
      }

    )
   
  }
  resetpass(k:string){

  }
  forgot(){
    let prompt = this.alertCtrl.create({
      title: 'Forgot Password',
      message: "Enter Your E-mail we will send reset link",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Youremail@emailaddress.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.resetpass(data.Email);
          }
        }
      ]
    });
    prompt.present();

  }
  register(){
    this.navCtrl.push(RegisterPage);

  }

}
