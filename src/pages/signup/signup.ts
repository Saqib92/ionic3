import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

@ViewChild('email') email;
@ViewChild('password') password;

	signinUser(){
		if (this.email.value == "saqib@gmail.com" && this.password.value == "123") {
				let alert = this.alertCtrl.create({
      title: 'Sign Up Successfull!',
      subTitle: 'Thank you for SigningIn!',
      buttons: ['OK']
    });
    alert.present();
		}
		else{
				let alert = this.alertCtrl.create({
      title: 'Sign In Failed!',
      subTitle: 'Please try Again!',
      buttons: ['OK']
    });
    alert.present();
		}

	}

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
