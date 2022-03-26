import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
    declarations: [
        DetailComponent,
    ],
    exports: [
        DetailComponent
    ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class PlanModule { }
