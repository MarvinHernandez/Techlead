import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // showProducts: boolean;

  // add budget and usage fields for filtering using router parameters

  constructor() {
    // this.showProducts = false;
   }

  ngOnInit(): void {
  }

  // DisplayProducts(): void {
  //   this.showProducts = true;
  // }

}
