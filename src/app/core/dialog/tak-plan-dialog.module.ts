import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TakPlanDialogProgressSpinnerComponent} from "./progress-spinner/tak-plan-dialog-progress-spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    TakPlanDialogProgressSpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class TakPlanDialogModule { }
