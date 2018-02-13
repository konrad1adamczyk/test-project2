import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MdcButtonModule, MdcFabModule, MdcToolbarModule} from '@angular-mdc/web';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcButtonModule,
    MdcFabModule,
    MdcToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
