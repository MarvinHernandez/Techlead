import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginStatus: boolean;
  constructor(private appcontext: AuthenticationService) { }

  ngOnInit(): void {
    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }
  }

}
