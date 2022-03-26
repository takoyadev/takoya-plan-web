import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event/event";

@Component({
  selector: 'app-calendar-options-picker',
  templateUrl: './calendar-options-picker.component.html',
  styleUrls: ['./calendar-options-picker.component.scss']
})
export class CalendarOptionsPickerComponent implements OnInit {

  @Input('event') event: Event = new Event();

  constructor() { }

  ngOnInit(): void {
  }

}
