import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Member} from '../../models/member';
import {MemberService} from '../../services/member.service';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './member-create.component.html'
})
export class MemberCreateComponent implements OnInit {
  member: Member;
  msg: string;
  createAccountForm: FormGroup;
  userName: FormControl;
  password: FormControl;

  constructor(private builder: FormBuilder, public memberService: MemberService) {
    this.userName = new FormControl('', Validators.compose([Validators.required]));
    this.password = new FormControl('', Validators.compose([Validators.required]));
  }

  ngOnInit(): void {
    this.createAccountForm = this.builder.group({
      userName : this.userName,
      password: this.password
    });
  }

  createMember(): void {
    this.member = {id: '', username: this.userName.value, password: this.password.value};

    this.memberService.add(this.member).subscribe( payload => {
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
}
