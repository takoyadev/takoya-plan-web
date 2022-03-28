import {Component, OnInit, ViewChild} from '@angular/core';
import {Event} from "../../data/event/event";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
  TakPlanDialogProgressSpinnerComponent
} from "../../core/dialog/progress-spinner/tak-plan-dialog-progress-spinner.component";
import {TakPlanSnackSuccessComponent} from "../../core/snack/success/tak-plan-snack-success.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TakPlanSnackUnimplementedComponent} from "../../core/snack/unimplemented/tak-plan-snack-unimplemented.component";
import {MatAccordion} from "@angular/material/expansion";
import {EventService} from "../../data/event/event.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tak-plan-page-participate',
  templateUrl: './tak-plan-page-participate.component.html',
  styleUrls: ['./tak-plan-page-participate.component.scss']
})
export class TakPlanPageParticipateComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  eventObs: Observable<Event> | undefined;
  id: number = -1;

  constructor(
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _eventService: EventService,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getEvent();
  }

  validate() {
    let dialogRef: MatDialogRef<TakPlanDialogProgressSpinnerComponent> = this._dialog.open(TakPlanDialogProgressSpinnerComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    setTimeout( // simule un appel à l'API
      () => this.onValidateSuccess(dialogRef),
      1000
    );
  }

  private onValidateSuccess(dialogRef: MatDialogRef<TakPlanDialogProgressSpinnerComponent>) {
    dialogRef.close()
    this._snackBar.openFromComponent(TakPlanSnackSuccessComponent, {
      duration: 1500,
    });
  }

  cancel() {
    this._snackBar.openFromComponent(TakPlanSnackUnimplementedComponent, {
      duration: 1500,
    });
    // TODO call picker.cleanAll()
  }

  getEvent() {
    console.log(this.id);
    this.eventObs = this._eventService.getEvent(this.id);
  }

}
