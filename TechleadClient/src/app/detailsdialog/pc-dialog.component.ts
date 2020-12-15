import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {PcSpecs} from '../models/pcSpecs';

@Component({
  template: `
 <button mat-button mat-dialog-close id="close" class="row" style="margin-left:80%;font-size: xx-large;">X</button>
 <h2 mat-dialog-title style="font-weight: bold;">{{modalTitle}}</h2>
 <mat-dialog-content>Price: {{price | currency:'USD':'symbol':'1.2-2'}}</mat-dialog-content>
 <mat-dialog-content>Product ID: {{id}}</mat-dialog-content>
 <mat-dialog-content>Usage: {{usage}}</mat-dialog-content>
  <table>
    <tr>Specs:</tr>
    <tr>CPU: {{specs.Cpu}}</tr>
    <tr>GPU: {{specs.Gpu}}</tr>
    <tr>Motherboard: {{specs.Motherboard}}</tr>
    <tr>RAM: {{specs.Ram}}</tr>
    <tr>Storage: {{specs.Storage}}</tr>
    <tr>Storage Unit: {{specs.StorageUnit}}</tr>
    <tr>Case: {{specs.Case}}</tr>
    <tr>Power Supply Unit: {{specs.PowerSupplyUnit}}</tr>
    <tr>Monitor: {{specs.Monitor}}</tr>
    <tr>Cooling: {{specs.Cooling}}</tr>
    <tr *ngIf="specs.pump">Pump: {{specs.pump}}</tr>
    <tr *ngIf="specs.Tubes">Tubes: {{specs.Tubes}}</tr>
    <tr *ngIf="specs.CoolingLiquid">Cooling Liquid: {{specs.CoolingLiquid}}</tr>
    <tr *ngIf="specs.Cables">Cables: {{specs.Cables}}</tr>
  </table>
 <mat-dialog-actions>
   <button mat-button id="wishlist" style="background-color: darkorange;font-weight: bold;">Add Item to Wishlist</button> <!-- mat-dialog-close -->
 </mat-dialog-actions>
 `
})
export class PcDialogComponent {
  modalTitle: string;
  entityname: string;
  id: string;
  price: number;
  usage: string;
  specs: PcSpecs;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.entityname = data.entityname;
    this.id = data.id;
    this.price = data.price;
    this.usage = data.usage;
    this.specs = data.specs;
  }
}
