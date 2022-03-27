import {Component, OnInit, ViewChild} from '@angular/core';
import {Event} from "../../data/event/event";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
  ProgressSpinnerDialogComponent
} from "../../core/dialog/progress-spinner-dialog/progress-spinner-dialog.component";
import {SuccessComponent} from "../../core/snack/success/success.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UnimplementedComponent} from "../../core/snack/unimplemented/unimplemented.component";
import {MatAccordion} from "@angular/material/expansion";
import {EventService} from "../../data/event/event.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-plan-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.scss']
})
export class ParticipateComponent implements OnInit {

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
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this._dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    setTimeout( // simule un appel à l'API
      () => this.onValidateSuccess(dialogRef),
      1000
    );
  }

  private onValidateSuccess(dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>) {
    dialogRef.close()
    this._snackBar.openFromComponent(SuccessComponent, {
      duration: 1500,
    });
  }

  cancel() {
    this._snackBar.openFromComponent(UnimplementedComponent, {
      duration: 1500,
    });
    // TODO call picker.cleanAll()
  }

  getEvent() {
    console.log(this.id);
    this.eventObs = this._eventService.getEvent(this.id);
  }

}
