import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../data/event/event";
import {Option} from "../../data/option/option";

@Component({
  selector: 'app-flat-options-picker',
  templateUrl: './flat-options-picker.component.html',
  styleUrls: ['./flat-options-picker.component.scss']
})
export class FlatOptionsPickerComponent implements OnInit {

  all: boolean | undefined = false;
  some: boolean | undefined = false;

  @Input('event') event: Event = new Event();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number): void {
    let option: Option = this.event?.options[index];
    if(option.selected) {
      option.selected = false;
      option.optional = true;
    } else if (option.optional) {
      option.optional = false;
    } else {
      option.selected = true;
    }
    this.checkAll();
  }

  setAll(targetStatus: Status) {
    this.all = targetStatus == Status.selected;
    this.some = targetStatus == Status.optional;
    this.event?.options.forEach(option => {
      switch (targetStatus) {
        case Status.selected:
          option.selected = true;
          option.optional = false;
          break;
        case Status.optional:
          option.selected = false;
          option.optional = true;
          break;
        case Status.disabled:
          option.selected = false;
          option.optional = false;
          break;
        default:
          break;
      }
    });
  }

  switchAll() {
    this.setAll((this.all||this.some) ? Status.disabled : Status.selected);
  }

  clearAll() {
    this.setAll(Status.disabled);
  }

  private checkAll() {
    let checkAll : boolean | undefined = true;
    let checkSome : boolean | undefined = false;
    this.event?.options.forEach(option => {
      checkAll = checkAll && option.selected;
      checkSome = checkSome || option.selected || option.optional;
    });
    checkSome = checkAll ? false : checkSome;
    this.some = checkSome;
    this.all = checkAll;
  }

}

enum Status {
  selected,
  optional,
  disabled
}
