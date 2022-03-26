import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('drawer') drawer: MatDrawer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    console.log(this.drawer);
    this.drawer?.toggle();
  }
}
