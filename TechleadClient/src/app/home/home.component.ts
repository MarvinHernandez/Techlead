import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginStatus: boolean;
// add budget and usage fields for filtering using router parameters
  constructor(private appcontext: AuthenticationService) { }

  ngOnInit(): void {
    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }
  }

}
