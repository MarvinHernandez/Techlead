import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // budgets are set to the max price of a product because that is the
  // value of the dropdown for 'all products selected'
  loginStatus: boolean;
  laptopUsage = 'All';
  laptopBudget = '3600';
  phoneUsage = 'All';
  phoneBudget = '1819';
  pcUsage = 'All';
  pcBudget = '10400';
  // add budget and usage fields for filtering using router parameters
  constructor(private appcontext: AuthenticationService) { }

  ngOnInit(): void {
    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }
  }
}
