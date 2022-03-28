import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'tak-plan-nav-toolbar',
  templateUrl: './tak-plan-nav-toolbar.component.html',
  styleUrls: ['./tak-plan-nav-toolbar.component.scss']
})
export class TakPlanNavToolbarComponent implements OnInit {

  @Input('drawer') drawer: MatDrawer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.drawer?.toggle();
  }
}
