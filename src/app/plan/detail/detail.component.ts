import { Component, OnInit } from '@angular/core';
import {Option} from "../option";

@Component({
  selector: 'app-plan-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  all: boolean = false;
  some: boolean = false;

  options: Option[] = [
    {label: "Vendredi 25 Mars 2022", selected: false, optional: false},
    {label: "Samedi 26 Mars 2022", selected: false, optional: false},
    {label: "Dimanche 27 Mars 2022", selected: false, optional: false},
    {label: "Lundi 28 Mars 2022", selected: false, optional: false},
    {label: "Mardi 29 Mars 2022", selected: false, optional: false},
    {label: "Mercredi 30 Mars 2022", selected: false, optional: false},
    {label: "Jeudi 31 Mars 2022", selected: false, optional: false},
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
    this.all = false;
    this.some = true;
  }

  setAll() {
    this.all = !(this.all||this.some);
    this.some = false;
    this.options.forEach(option => {
      option.optional = false;
      option.selected = this.all;
    });
  }
}
