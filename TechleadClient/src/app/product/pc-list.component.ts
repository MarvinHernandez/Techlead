import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pc } from '../models/pc';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html'
})
export class PcListComponent {
  @Input() vendors: Pc[];
  @Output() selected = new EventEmitter();
}
