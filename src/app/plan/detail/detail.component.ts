import {Component, OnInit} from '@angular/core';
import {Option} from "../option";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ValidateComponent} from "../../snack/validate/validate.component";
import {CancelComponent} from "../../snack/cancel/cancel.component";

@Component({
  selector: 'app-plan-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  all: boolean | undefined = false;
  some: boolean | undefined = false;

  options: Option[] = [
    {label: "Vendredi 25 Mars 2022", selected: false, optional: false},
    {label: "Samedi 26 Mars 2022", selected: false, optional: false},
    {label: "Dimanche 27 Mars 2022", selected: false, optional: false},
    {label: "Lundi 28 Mars 2022", selected: false, optional: false},
    {label: "Mardi 29 Mars 2022", selected: false, optional: false},
    {label: "Mercredi 30 Mars 2022", selected: false, optional: false},
    {label: "Jeudi 31 Mars 2022", selected: false, optional: false},
  ];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClick(index: number): void {
    let option: Option = this.options[index];
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
    this.options.forEach(option => {
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
    this.options.forEach(option => {
      checkAll = checkAll && option.selected;
      checkSome = checkSome || option.selected || option.optional;
    });
    checkSome = checkAll ? false : checkSome;
    this.some = checkSome;
    this.all = checkAll;
  }

  validate() {
    this._snackBar.openFromComponent(ValidateComponent, {
      duration: 1500,
    });
  }

  cancel() {
    this._snackBar.openFromComponent(CancelComponent, {
      duration: 1500,
    });
    this.all = true;
    this.clearAll();
  }
}

enum Status {
  selected,
  optional,
  disabled
}
