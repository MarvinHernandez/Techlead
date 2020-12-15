import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pc } from '../../models/pc';

@Component({
  selector: 'app-pc-list',
  template:
  `
    <mat-list-item *ngFor="let pc of pcs" (click)="selected.emit(pc)" style="padding-bottom: 4vh;
                                                                                      display: inline-block;
                                                                                      height: auto;
                                                                                      width: auto;"
    >
      <div class="card">
        <h4 class="card-header" style="background-color: tomato; color: white">{{ pc.NickName }}</h4>
        <div class="card-body">
          <div class="row" style="justify-content: center !important">
            <img
              src="assets/images/{{pc.NickName}}.png"
              alt="Generic placeholder image"
              width="150px"
              height="150px"
            />
          </div>
          <div class="row" style="justify-content: center !important">
            <p>
              <a style="font-weight: bold">Price: </a>
              <a style="color: green;">{{pc.price | currency:'USD':'symbol':'1.2-2'}}</a>
            </p>
          </div>
        </div>
      </div>
    </mat-list-item>
  `
})
export class PcListComponent {
  @Input() pcs: Pc[];
  @Output() selected = new EventEmitter();
}

// (click)="openDetailsModalPc(pc)
