import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlatOptionsPickerComponent} from "./flat-options-picker/flat-options-picker.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import { CalendarOptionsPickerComponent } from './calendar-options-picker/calendar-options-picker.component';


@NgModule({
  declarations: [
    FlatOptionsPickerComponent,
    CalendarOptionsPickerComponent
  ],
  exports: [
    FlatOptionsPickerComponent,
    CalendarOptionsPickerComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class OptionsPickerModule { }
