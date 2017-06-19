import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,ToastController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:string;
  pass:string;
  repass:string;
  name:string;

  constructor(public navCtrl: NavController,public ldcntrl:LoadingController, public navParams: NavParams,public authservice:AuthserviceProvider,public alertCtrl:AlertController,public toast:ToastController) {

  }

  register(){
    if(this.pass==this.repass){
      let load = this.ldcntrl.create({
      content: 'Wait Registering username and password'
        });
    load.present();
    this.authservice.register(this.email,this.pass).then((res: any) => {
     
      if (!res.code){
        load.dismiss();
        let toast = this.toast.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
        
        this.navCtrl.push(HomePage);
      }
      
        
    }).catch(()=>{
       load.dismiss();
        let k=this.alertCtrl.create({
          title :"Failed attemp",
          message: "E-Mail Already registered or invalid E-mail"
        });
        k.present();
      });
    }
  
    else{
      alert("invalid");
    }
  }
  cancel(){
    this.navCtrl.popToRoot();
  }

}
