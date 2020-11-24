import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, first, map} from 'rxjs/operators';
import { AuthenticationService} from '../services/authentication.service'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-debuglogin-home',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  userName: FormControl;
  password: FormControl;
  constructor(private router: Router, private builder: FormBuilder, private appcontext: AuthenticationService) {

  } // constructor
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  } // ngOnInit

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }

  login(): void {
    this.appcontext.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/memberhome']);
        },
        error => {

        });
  }
}
