import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'tak-plan-form-profil',
  templateUrl: './tak-plan-form-profil.component.html',
  styleUrls: ['./tak-plan-form-profil.component.scss']
})
export class TakPlanFormProfilComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  firstNameFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
