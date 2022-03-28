import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event/event";

@Component({
  selector: 'tak-plan-form-options',
  templateUrl: './tak-plan-form-options.component.html',
  styleUrls: ['./tak-plan-form-options.component.scss']
})
export class TakPlanFormOptionsComponent implements OnInit {

  @Input('event') event: Event = new Event();

  constructor() { }

  ngOnInit(): void {
  }

}
