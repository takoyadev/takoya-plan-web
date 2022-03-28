import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {TakPlanPageHomeComponent} from './page/home/tak-plan-page-home.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import {TakPlanPageParticipateComponent} from "./page/participate/tak-plan-page-participate.component";
import {TakPlanPageCreateComponent} from "./page/create/tak-plan-page-create.component";
import {TakPlanPageModule} from "./page/tak-plan-page.module";
import {TakPlanNavModule} from "./nav/tak-plan-nav.module";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TakPlanPageHomeComponent },
  { path: 'create', component: TakPlanPageCreateComponent },
  { path: 'participate/:id', component: TakPlanPageParticipateComponent },
  { path: '**', component: TakPlanPageHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TakPlanPageModule,
    TakPlanNavModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
