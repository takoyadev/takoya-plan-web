import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'tak-plan-page-create',
  templateUrl: './tak-plan-page-create.component.html',
  styleUrls: ['./tak-plan-page-create.component.scss']
})
export class TakPlanPageCreateComponent implements OnInit {

  step = 0;

  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  setStep(step: number) {
    this.step = step;
  }

  prevStep() {
    this.step--;
  }

  nextStep() {
    this.step++;
  }

  validate() {

  }

  cancel() {
    this._location.back();
  }

}
