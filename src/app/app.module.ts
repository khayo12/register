import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AttendancePage } from '../pages/attendance/attendance';
import { OnePage } from '../pages/one/one';
import { TwoPage } from '../pages/two/two';
import { ThreePage } from '../pages/three/three';
import { FourPage } from '../pages/four/four';
import { FivePage } from '../pages/five/five';
import { SixPage } from '../pages/six/six';

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyASvnD-6XxUasxGNpyENr-KzmdQDIY6fRY",
  authDomain: "register-3ca0c.firebaseapp.com",
  projectId: "register-3ca0c",
  storageBucket: "register-3ca0c.appspot.com",
  messagingSenderId: "1019656276577",
  appId: "1:1019656276577:web:4fdc1a2ced83922105b820",
  measurementId: "G-3V0D256D80"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    AttendancePage,
    OnePage,
    TwoPage,
    ThreePage,
    FourPage,
    FivePage,
    SixPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    AttendancePage,
    OnePage,
    TwoPage,
    ThreePage,
    FourPage,
    FivePage,
    SixPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
