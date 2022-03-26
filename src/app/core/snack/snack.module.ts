import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnimplementedComponent } from './unimplemented/unimplemented.component';
import {SuccessComponent} from "./success/success.component";



@NgModule({
  declarations: [
    UnimplementedComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SnackModule { }
