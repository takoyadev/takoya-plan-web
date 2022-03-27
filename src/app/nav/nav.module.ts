import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent
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
export class NavModule { }
