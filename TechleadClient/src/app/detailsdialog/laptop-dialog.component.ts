import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {ProductFeedbackComponent} from '../product-feedback/product-feedback.component';

@Component({
  template: `
 <button mat-button mat-dialog-close id="close" class="row" style="margin-left:85%;font-size: xx-large;">X</button>
 <h2 mat-dialog-title style="font-weight: bold;">{{modalTitle}}</h2>
 <mat-dialog-content>Price: {{price | currency:'USD':'symbol':'1.2-2'}}</mat-dialog-content>
 <mat-dialog-content>Product ID: {{id}}</mat-dialog-content>
 <mat-dialog-content>Manufacturer: {{company}}</mat-dialog-content>
 <mat-dialog-content>Usages: {{usage}}</mat-dialog-content>
 <mat-dialog-content>Operating System: {{operatingsystem}}</mat-dialog-content>
 <mat-dialog-content>Screen Size: {{screensize}}</mat-dialog-content>
 <mat-dialog-content>Screen Resolution: {{screenresolution}}</mat-dialog-content>
 <mat-dialog-content>CPU Provider: {{cpuprovider}}</mat-dialog-content>
 <mat-dialog-content>CPU: {{cpu}}</mat-dialog-content>
 <mat-dialog-content>Touch Screen: {{touch}}</mat-dialog-content>
 <mat-dialog-content>Two in One (Tablet): {{twoinone}}</mat-dialog-content>
 <mat-dialog-content>Build Quality: {{buildquality}}</mat-dialog-content>
 <mat-dialog-content>RAM: {{ram}}</mat-dialog-content>
 <mat-dialog-content>Storage: {{storage}}</mat-dialog-content>
 <mat-dialog-actions>
   <button mat-button id="wishlist" style="background-color: darkorange;font-weight: bold;">Add Item to Wishlist</button> <!-- mat-dialog-close -->
 </mat-dialog-actions>
<!-- <app-product-feedback></app-product-feedback>-->
 `
})
export class LaptopDialogComponent {
  modalTitle: string;
  entityname: string;
  id: string;
  price: number;
  company: string;
  operatingsystem: string;
  usage = ''; // array
  screensize: string;
  cpuprovider: string;
  cpu: string;
  screenresolution: string;
  touch: string;
  twoinone: string;
  buildquality: string;
  ram: string;
  storage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.entityname = data.entityname;
    this.id = data.id;
    this.price = data.price;
    this.company = data.company;
    this.operatingsystem = data.operatingsystem;
    this.screensize = data.screensize;
    this.cpuprovider = data.cpuprovider;
    this.cpu = data.cpu;
    this.screenresolution = data.screenresolution;
    this.touch = data.touch;
    this.twoinone = data.twoinone;
    this.buildquality = data.buildquality;
    this.ram = data.ram;
    this.storage = data.storage;
    // formatting usage string to hold the array
    for (let i = 0; i < data.usage.length; i++)
    {
      if (i === data.usage.length - 1)
      {
        this.usage += data.usage[i];
      }
      else
      {
        this.usage += `${data.usage[i]}, `;
      }
    }
  }
}
