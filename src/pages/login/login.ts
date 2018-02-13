import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public http: Http ) {
  }


email = "";
password = "";

    logInUser(){
  	console.log(this.email + "" + this.password);
var token = "!!!stylish!!!";
var deviceId = "abcdeToken";
var mode = false;

 
this.http.get('http://cepiapp.com/stylishbytes/public/api/stylish_login/'+ this.email +"/"+ this.password +"/"+ token +"/" +deviceId+"/"+mode)
.map(res => res.json())
.subscribe(data => {
   var myVar = data;
   console.log(myVar);
   if (myVar.status == "true") {
     let alert = this.alertCtrl.create({
      title: 'Login Successfull!',
      subTitle: 'Thank you for LoggingIn!',
      buttons: ['OK']
    });
    alert.present();
   }
   else{
     let alert = this.alertCtrl.create({
      title: 'Login Failed!',
      subTitle: 'Please Check Details!',
      buttons: ['OK']
    });
    alert.present();
   }
});

}



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
