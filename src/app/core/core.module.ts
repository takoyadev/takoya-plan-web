import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerDialogComponent } from './dialog/progress-spinner-dialog/progress-spinner-dialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    ProgressSpinnerDialogComponent
  ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ]
})
export class CoreModule { }
