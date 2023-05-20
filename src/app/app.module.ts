import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {HousingService} from "./housing.service";

@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    HomeComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
