import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Laptop } from '../models/laptop';

@Component({
  selector: 'app-laptop-list',
  template:
    `
    <mat-list-item *ngFor="let laptop of laptops" (click)="selected.emit(laptop)">
      {{ laptop.name }} - {{ laptop.price | currency}}
    </mat-list-item>
  `
})
export class LaptopListComponent {
  @Input() laptops: Laptop[];
  @Output() selected = new EventEmitter();
}
