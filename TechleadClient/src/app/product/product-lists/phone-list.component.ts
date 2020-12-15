import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-phone-list',
  template:
    `
    <mat-list-item *ngFor="let phone of phones" (click)="selected.emit(phone)" style="padding-bottom: 4vh;
                                                                                      display: inline-block;
                                                                                      height: auto;
                                                                                      width: auto;"
    >
      <div class="card">
        <h4 class="card-header" style="background-color: tomato; color: white">{{ phone.Name }}</h4>
        <div class="card-body">
          <div class="row" style="justify-content: center !important">
            <img
              src="assets/images/{{phone.Name}}.png"
              alt="Generic placeholder image"
              width="150px"
              height="150px"
            />
          </div>
          <div class="row" style="justify-content: center !important">
            <p>
              <a style="font-weight: bold">Price: </a>
              <a style="color: green;">{{phone.Price | currency:'USD':'symbol':'1.2-2'}}</a>
            </p>
          </div>
<!--          <table style="width: 100%">-->
<!--            <tr style="align-content: center">-->
<!--              <img-->
<!--                src="assets/images/{{phone.Name}}.png"-->
<!--                alt="Generic placeholder image"-->
<!--                width="100px"-->
<!--                height="100px"-->
<!--              />-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <a>Price: </a>-->
<!--              <a style="color: green;">{{phone.Price | currency:'USD':'symbol':'1.2-2'}}</a>-->
<!--            </tr>-->
<!--          </table>-->
        </div>
      </div>
    </mat-list-item>
  `
})
export class PhoneListComponent {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
}
