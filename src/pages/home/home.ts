import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { SliderPage } from '../slider/slider';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FCM } from '@ionic-native/fcm';
import { LinkedIn } from '@ionic-native/linkedin';
import * as $ from 'jquery'
import { Flashlight } from '@ionic-native/flashlight';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';



import { Http } from '@angular/http';
import 'rxjs/add/operator/map';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
	toLogin(){
		this.navCtrl.push(LoginPage);
	}
	toSingin(){
		this.navCtrl.push(SignupPage);
	}
  toSlider(){
    this.navCtrl.push(SliderPage);
  }
  public showSelected = 5;

  matches = []; 
  texttospeech:string; 


  ngifFunc(showSelected){
    console.log(this.showSelected);
    this.showSelected = 4;
    console.log(this.showSelected);  // variable for ng-IF example  *ngIf="showSelected == '5'" 
  }

  public users = [    // array of JSON for ng-repeat  == *ngFor
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 }
  ];
  public myCon:any;



  constructor(public navCtrl: NavController,private flashlight: Flashlight, private linkedin: LinkedIn, private fcm: FCM, public alertCtrl: AlertController,private camera: Camera, public actionSheetCtrl: ActionSheetController, private fb: Facebook,public http: Http,private tts: TextToSpeech,private speechRecognition: SpeechRecognition) {
  

  }




myCam(){ // Camera 

console.log("Hello world");

  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 console.log(base64Image);
}, (err) => {
 // Handle error
});

}
myGal(){ // Camera Gallery

console.log("Hello Gallery");

  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 console.log(base64Image);
}, (err) => {
 // Handle error
});

}

actSheet(){  // Action Sheet

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

 loginWithFb(){

    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


//this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }


myFcm(){
try{
this.fcm.getToken().then(token=>{
alert("token is "+token);
console.log(token)
})

this.fcm.onNotification().subscribe(data=>{
  alert("notify");
  if(data.wasTapped){
    alert("Received in background");
  } else {
    alert("Received in foreground");
  };
},error =>{
  alert("error is "+JSON.stringify(error));
})
}catch(e){
alert(JSON.stringify(e));
}

}

loginWithLinkedin(){
// check if there is an active session
this.linkedin.hasActiveSession().then((active) => console.log('has active session?', active));

// login
const scopes:any = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
this.linkedin.login(scopes, true)
  .then(() => console.log('Logged in!'))
  .catch(e => console.log('Error logging in', e));


// get connections
this.linkedin.getRequest('people/~')
  .then(res => console.log(res))
  .catch(e => console.log(e));

// share something on profile
const body = {
  comment: 'Hello world!',
  visibility: {
    code: 'anyone'
  }
};

this.linkedin.postRequest('~/shares', body)
  .then(res => console.log(res))
  .catch(e => console.log(e));
}

jqueryFunc(){    // jquery function 
  $('.title').slideToggle(); //
}

openFlash(){
  this.flashlight.switchOn();
}
closeFlash(){
  this.flashlight.switchOff();
}

getCountries(){

this.http.get('https://restcountries.eu/rest/v2/all')
.map(res => res.json())
.subscribe(data => {
    this.myCon = data;
   console.log(this.myCon);   
});

}

textSpeech(){
const options = {
  text: this.texttospeech,
  locale: 'en-US',
  rate: 0.02
}
  this.tts.speak(options)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}

getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }
 
  startListening() {
    let options = {
      language: 'ur-PK'
    }
      this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
    });

  }


}