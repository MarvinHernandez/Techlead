import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-debuglogin-home',
  templateUrl: './debuglogin.component.html',
})
export class DebugLoginComponent implements OnInit {

  constructor(private appcontext: AuthenticationService) {} // constructor
  ngOnInit(): void {

  } // ngOnInit
}
