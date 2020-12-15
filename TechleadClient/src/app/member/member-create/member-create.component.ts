import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Member} from '../../models/member';
import {MemberService} from '../../services/member.service';
import {Subscription} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import { AuthenticationService} from '../../services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './member-create.component.html'
})
export class MemberCreateComponent implements OnInit, OnDestroy {
  error: string;
  subscription: Subscription;
  createAccountForm: FormGroup;
  members: Member[];
  member: Member;
  userName: FormControl;
  password: FormControl;
  loginStatus: boolean;
  submitted = false;
  loading = false;

  constructor(private builder: FormBuilder, public memberService: MemberService,
              private toastr: ToastrService, private router: Router, private appcontext: AuthenticationService) {
    this.userName = new FormControl('', Validators.compose([Validators.required,
    this.userNameUsedValidator.bind(this)]));
    this.password = new FormControl('', Validators.compose([Validators.required]));
  }

  ngOnInit(): void {
    this.createAccountForm = this.builder.group({
      userName: this.userName,
      password: this.password
    });
    // populate the members array
    this.subscription = this.memberService.getAll().subscribe(members => {
      this.members = members;
    }, error => {
      this.members = [];
      this.error = `A connection error occurred`;
    });

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.createAccountForm.controls; }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Creates a member and stores it into the database
  createMember(): void {
    this.member = {id: '', username: this.userName.value, password: this.password.value};
    this.submitted = true;

    // stop here if form is invalid
    if (this.createAccountForm.invalid) {
      return;
    }

    this.loading = true;
    this.memberService.addMember(this.member).subscribe( payload => {
        if (payload > 0) {
          this.toastr.success("Account Created. Redirecting to home");
          this.appcontext.login(this.userName.value, this.password.value)
            .pipe(first())
            .subscribe(
              data => {
                this.router.navigate(['/']);
              },
              error => {
                this.submitted = false;
                this.loading = false;
              });
        } else {
          this.toastr.error("Unable to create the account");
        }
      },
      err => {
        this.toastr.error(err);
        this.submitted = false;
        this.loading = false;
      });
  }
  // Validator that checks if the user name is used
  userNameUsedValidator(control): {userNameUsed: boolean} {
    if (this.members){
      return this.members.find(member => member.username === this.userName.value) ?
        {userNameUsed: true} : null;
    }
  }
}
