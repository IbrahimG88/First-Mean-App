import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import{ ComponentEvent } from './app.component1';

import{ ComponentFormEvent } from './app.component1';

import { ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, ComponentFormEvent
  ],
  imports: [
    BrowserModule,
  ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
