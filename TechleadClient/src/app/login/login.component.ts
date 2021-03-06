import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, first, map} from 'rxjs/operators';
import { AuthenticationService} from '../services/authentication.service'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
  constructor(private router: Router,
              private builder: FormBuilder,
              private toastr: ToastrService,
              private appcontext: AuthenticationService) {} // constructor

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
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.appcontext.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
            this.toastr.success("Login Successful. Redirecting to home");
            this.router.navigate(['/']);
        },
        error => {
          this.toastr.error("Login Failed: Check username and password");
          this.submitted = false;
        });
  }
}
