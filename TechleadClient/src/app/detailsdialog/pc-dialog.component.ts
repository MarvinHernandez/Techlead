import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
 <button mat-button mat-dialog-close id="close" class="row" style="margin-left:80%;font-size: xx-large;">X</button>
 <h2 mat-dialog-title>{{modalTitle}}</h2>
 <mat-dialog-content>{{entityname}} data</mat-dialog-content>
<!-- <mat-dialog-actions>-->
<!-- <button mat-button mat-dialog-close id="deleteNo">No</button>-->
<!-- &lt;!&ndash; The mat-dialog-close directive optionally accepts a value as a result for the dialog.-->
<!--&ndash;&gt;-->
<!-- <button mat-button [mat-dialog-close]="true" id="deleteYes">Yes</button>-->
<!-- </mat-dialog-actions>-->
 `
})
export class PcDialogComponent {
  modalTitle: string;
  entityname: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.entityname = data.entityname;
  }
}