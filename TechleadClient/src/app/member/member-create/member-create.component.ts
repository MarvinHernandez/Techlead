import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Member} from '../../models/member';
import {MemberService} from '../../services/member.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './member-create.component.html'
})
export class MemberCreateComponent implements OnInit, OnDestroy {
  msg: string;
  subscription: Subscription;
  createAccountForm: FormGroup;
  members: Member[];
  userName: FormControl;
  password: FormControl;

  constructor(private builder: FormBuilder, public memberService: MemberService) {
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
    this.subscription = this.memberService.getAll().subscribe(members => this.members = members);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Creates a member and stores it into the database
  createMember(): void {
    const member: Member = {id: '', username: this.userName.value, password: this.password.value};

    this.memberService.add(member).subscribe( payload => {
        if (payload.id !== '') {
            this.msg = 'Member account created';
        } else {
          this.msg = 'Member account not created';
        }
      },
      err => {
        this.msg = 'An error occurred while creating the account' + err.msg;
      });
  }
  userNameUsedValidator(control) {
    if (this.members){
      return this.members.find(member => member.username === this.userName.value) ?
        {userNameUsed: true} : null;
    }
  }
}
