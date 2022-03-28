import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakPlanNavToolbarComponent } from './toolbar/tak-plan-nav-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TakPlanNavSidebarComponent } from './sidebar/tak-plan-nav-sidebar.component';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TakPlanNavToolbarComponent,
    TakPlanNavSidebarComponent
  ],
  exports: [
    TakPlanNavToolbarComponent,
    TakPlanNavSidebarComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        RouterModule
    ]
})
export class TakPlanNavModule { }
