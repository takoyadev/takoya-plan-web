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

@Component({
  selector: 'app-plan-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  event: Event = {
    label: "My first event ever",
    author: "Chinjto",
    options: [
      {date: new Date("2022-03-26T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-03-27T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-03-28T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-03-29T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-03-30T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-03-31T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-04-01T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-04-02T00:00:00.000Z"), selected: false, optional: false},
      {date: new Date("2022-04-03T00:00:00.000Z"), selected: false, optional: false},
    ]
  };

  constructor(
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  validate() {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
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

}
