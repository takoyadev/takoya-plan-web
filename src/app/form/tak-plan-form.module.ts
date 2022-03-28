import {NgModule} from '@angular/core';
import {TakPlanFormProfilComponent} from "./profil/tak-plan-form-profil.component";
import {TakPlanFormOptionsComponent} from "./options/tak-plan-form-options.component";
import {TakPlanPickerOptionsModule} from "../core/picker/options/tak-plan-picker-options.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    TakPlanFormProfilComponent,
    TakPlanFormOptionsComponent,
  ],
  exports: [
    TakPlanFormProfilComponent,
    TakPlanFormOptionsComponent
  ],
  imports: [
    TakPlanPickerOptionsModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule
  ]
})
export class TakPlanFormModule { }
