import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateComponent } from './validate/validate.component';
import { CancelComponent } from './cancel/cancel.component';



@NgModule({
  declarations: [
    ValidateComponent,
    CancelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SnackModule { }
