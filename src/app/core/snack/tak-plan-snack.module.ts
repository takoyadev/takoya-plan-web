import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakPlanSnackUnimplementedComponent } from './unimplemented/tak-plan-snack-unimplemented.component';
import {TakPlanSnackSuccessComponent} from "./success/tak-plan-snack-success.component";



@NgModule({
  declarations: [
    TakPlanSnackUnimplementedComponent,
    TakPlanSnackSuccessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TakPlanSnackModule { }
