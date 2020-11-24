import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pc } from '../models/pc';

@Component({
  selector: 'app-pc-list',
  template:
  `
    <mat-list-item *ngFor="let pc of pcs" (click)="selected.emit(pc)">
      "{{ pc.NickName }}" - {{ pc.price | currency}}
    </mat-list-item>
  `
})
export class PcListComponent {
  @Input() pcs: Pc[];
  @Output() selected = new EventEmitter();
}

// (click)="openDetailsModalPc(pc)
