import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: 'AIzaSyDP_CeXVzS-0p46Rb6Q2g6N0CIi8H3LCB0',
    authDomain: 'oevent-staging.firebaseapp.com',
    databaseURL: 'https://oevent-staging.firebaseio.com',
    projectId: 'oevent-staging',
    storageBucket: 'oevent-staging.appspot.com',
    messagingSenderId: '617317956709'
};

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'Oevent')
  ]
})

export class FirebaseModule {}
