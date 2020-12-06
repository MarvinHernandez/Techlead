import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '../models/phone';

@Component({
  selector: 'app-phone-list',
  template:
    `
    <mat-list-item *ngFor="let phone of phones" (click)="selected.emit(phone)">
      {{ phone.Name }} - {{phone.Price | currency:'USD':'symbol':'1.2-2'}}
    </mat-list-item>
  `
})
export class PhoneListComponent {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
}
