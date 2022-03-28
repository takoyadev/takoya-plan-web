import {NgModule} from '@angular/core';
import {TakPlanPageCreateComponent} from "./create/tak-plan-page-create.component";
import {TakPlanPageParticipateComponent} from "./participate/tak-plan-page-participate.component";
import {TakPlanPageHomeComponent} from "./home/tak-plan-page-home.component";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {TakPlanFormModule} from "../form/tak-plan-form.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TakPlanPageCreateComponent,
    TakPlanPageHomeComponent,
    TakPlanPageParticipateComponent,
  ],
  imports: [
    MatCardModule,
    MatExpansionModule,
    TakPlanFormModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    CommonModule,
    RouterModule
  ]
})
export class TakPlanPageModule { }
