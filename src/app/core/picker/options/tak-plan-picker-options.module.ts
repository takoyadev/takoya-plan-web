import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TakPlanPickerOptionsCalendarComponent} from "./calendar-options-picker/tak-plan-picker-options-calendar.component";
import {TakPlanPickerOptionsFlatComponent} from "./flat-options-picker/tak-plan-picker-options-flat.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TakPlanPickerOptionsCalendarComponent,
    TakPlanPickerOptionsFlatComponent,
  ],
  exports: [
    TakPlanPickerOptionsFlatComponent,
    TakPlanPickerOptionsCalendarComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class TakPlanPickerOptionsModule { }
