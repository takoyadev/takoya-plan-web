import { Component, OnInit } from '@angular/core';
import {Option} from "../option";

@Component({
  selector: 'app-plan-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  options: Option[] = [
    {label: "Vendredi 25 Mars 2022", selected: false, optional: false},
    {label: "Samedi 26 Mars 2022", selected: false, optional: false},
    {label: "Dimanche 27 Mars 2022", selected: false, optional: false}
  ];

  constructor() { }

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
  }

}
