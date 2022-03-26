import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event/event";

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.scss']
})
export class OptionsFormComponent implements OnInit {

  @Input('event') event: Event = new Event();

  constructor() { }

  ngOnInit(): void {
  }

}
