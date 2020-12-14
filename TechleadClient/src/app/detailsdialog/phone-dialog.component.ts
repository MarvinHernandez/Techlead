import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
 <button mat-button mat-dialog-close id="close" class="row" style="margin-left:80%;font-size: xx-large;">X</button>
 <h2 mat-dialog-title style="font-weight: bold;">{{modalTitle}}</h2>
 <mat-dialog-content>Price: {{price | currency:'USD':'symbol':'1.2-2'}}</mat-dialog-content>
 <mat-dialog-content>Product ID: {{id}}</mat-dialog-content>
 <mat-dialog-content>Manufacturer: {{company}}</mat-dialog-content>
 <mat-dialog-content>Model Type: {{type}}</mat-dialog-content>
 <mat-dialog-content>Positives: {{positives}}</mat-dialog-content>
 <mat-dialog-content>Main Usage: {{usage}}</mat-dialog-content>
 <mat-dialog-content>CPU: {{cpu}}</mat-dialog-content>
 <mat-dialog-content>RAM: {{ram}}</mat-dialog-content>
 <mat-dialog-content>Screen Size: {{screensize}}</mat-dialog-content>
 <mat-dialog-content>5G Support: {{fivegsupport}}</mat-dialog-content>
<!-- <mat-dialog-actions>-->
<!-- <button mat-button mat-dialog-close id="deleteNo">No</button>-->
<!-- &lt;!&ndash; The mat-dialog-close directive optionally accepts a value as a result for the dialog.-->
<!--&ndash;&gt;-->
<!-- <button mat-button [mat-dialog-close]="true" id="deleteYes">Yes</button>-->
<!-- </mat-dialog-actions>-->
 `
})
export class PhoneDialogComponent {
  modalTitle: string;
  entityname: string;
  id: string;
  company: string;
  type: string;
  price: number;
  positives = '';
  usage: string;
  cpu: string;
  ram: string;
  screensize: string;
  fivegsupport: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.entityname = data.entityname;
    this.id = data.id;
    this.company = data.company;
    this.type = data.type;
    this.price = data.price;
    this.usage = data.usage;
    this.cpu = data.cpu;
    this.ram = data.ram;
    this.screensize = data.screensize;
    this.fivegsupport = data.fivegsupport;
    // formatting positives string to hold the array
    for (let i = 0; i < data.positives.length; i++)
    {
      if (i === data.positives.length - 1)
      {
        this.positives += data.positives[i];
      }
      else
      {
        this.positives += `${data.positives[i]}, `;
      }
    }
  }
}
