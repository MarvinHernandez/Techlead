import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Laptop } from '../../models/laptop';

@Component({
  selector: 'app-laptop-list',
  template:
    `
    <mat-list-item *ngFor="let laptop of laptops" (click)="selected.emit(laptop)" style="padding-bottom: 4vh;
                                                                                         display: inline-block;
                                                                                         height: auto;
                                                                                         width: auto;"
    >
      <table>
        <tr style="font-weight: bold;">
          {{ laptop.Name }}
        </tr>
        <tr style="color: green;">
          {{laptop.price | currency:'USD':'symbol':'1.2-2'}}
        </tr>
      </table>
    </mat-list-item>
  `
})
export class LaptopListComponent {
  @Input() laptops: Laptop[];
  @Output() selected = new EventEmitter();
}
