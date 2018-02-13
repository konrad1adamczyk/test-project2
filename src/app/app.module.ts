import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MdcButtonModule, MdcFabModule} from '@angular-mdc/web';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcButtonModule,
    MdcFabModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
