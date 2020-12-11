import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '../models/phone';

@Component({
  selector: 'app-phone-list',
  template:
    `
    <mat-list-item *ngFor="let phone of phones" (click)="selected.emit(phone)" style="padding-bottom: 4vh;
                                                                                      display: inline-block;
                                                                                      height: auto;
                                                                                      width: auto;"
    >
      <table>
        <tr style="font-weight: bold;">
          {{ phone.Name }}
        </tr>
        <tr style="color: green;">
          {{phone.Price | currency:'USD':'symbol':'1.2-2'}}
        </tr>
      </table>
    </mat-list-item>
  `
})
export class PhoneListComponent {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
}
