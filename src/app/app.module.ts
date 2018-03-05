import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

var firebaseConfig = {
  apiKey: "AIzaSyA7kiS6OhaYajw4_0apUdwheKjX3ku_9s0",
  authDomain: "contactlist.firebaseapp.com",
  databaseURL: "https://contactlist.firebaseio.com",
  projectId: "contactlist-cb594",
  storageBucket: "contactlist.appspot.com",
  messagingSenderId: "963269644962"
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    CoreModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
