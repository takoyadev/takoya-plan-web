import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PlanModule} from "./plan/plan.module";
import {NavModule} from "./nav/nav.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PlanModule,
        NavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
