import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pc } from '../models/pc';

@Component({
  selector: 'app-pc-list',
  template:
  `
    <mat-list-item *ngFor="let pc of pcs" (click)="selected.emit(pc)" style="padding-bottom: 4vh;
                                                                             display: inline-block;
                                                                             height: auto;
                                                                             width: auto;"
    >
      <table>
        <tr style="font-weight: bold;">
          "{{ pc.NickName }}"
        </tr>
        <tr style="color: green;">
          {{pc.price | currency:'USD':'symbol':'1.2-2'}}
        </tr>
      </table>
    </mat-list-item>
  `
})
export class PcListComponent {
  @Input() pcs: Pc[];
  @Output() selected = new EventEmitter();
}

// (click)="openDetailsModalPc(pc)
