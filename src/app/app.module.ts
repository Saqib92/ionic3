import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SliderPage } from '../pages/slider/slider';

import { HttpModule } from '@angular/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { FCM } from '@ionic-native/fcm';
import { LinkedIn } from '@ionic-native/linkedin';
import { Flashlight } from '@ionic-native/flashlight';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    SliderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SliderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FCM,
    Facebook,
    LinkedIn,
    Flashlight,
    TextToSpeech,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
