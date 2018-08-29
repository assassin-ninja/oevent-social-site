import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirebaseModule } from '../firebase';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
