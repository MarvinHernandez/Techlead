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
      <div class="card">
        <h4 class="card-header" style="background-color: tomato; color: white">{{ laptop.Name }}</h4>
        <div class="card-body">
          <div class="row" style="justify-content: center !important">
            <img
              src="assets/images/{{laptop.Name}}.png"
              alt="Generic placeholder image"
              width="150px"
              height="150px"
            />
          </div>
          <div class="row" style="justify-content: center !important">
            <p>
              <a style="font-weight: bold">Price: </a>
              <a style="color: green;">{{laptop.price | currency:'USD':'symbol':'1.2-2'}}</a>
            </p>
          </div>
        </div>
      </div>
    </mat-list-item>
  `
})
export class LaptopListComponent {
  @Input() laptops: Laptop[];
  @Output() selected = new EventEmitter();
}
