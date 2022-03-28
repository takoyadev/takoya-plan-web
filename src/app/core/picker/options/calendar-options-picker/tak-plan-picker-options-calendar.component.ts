import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../../data/event/event";

@Component({
  selector: 'tak-plan-picker-options-calendar',
  templateUrl: './tak-plan-picker-options-calendar.component.html',
  styleUrls: ['./tak-plan-picker-options-calendar.component.scss']
})
export class TakPlanPickerOptionsCalendarComponent implements OnInit {

  @Input('event') event: Event = new Event();

  constructor() { }

  ngOnInit(): void {
  }

}
