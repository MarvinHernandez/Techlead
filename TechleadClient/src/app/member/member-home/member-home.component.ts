import { Component, OnInit } from '@angular/core';
import {Member} from '../../models/member';
import {MemberService} from '../../services/member.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.scss']
})
export class MemberHomeComponent implements OnInit {
  members$: Observable<Member[]>;
  member: Member;
  msg: string;
  hideEditForm: boolean;
  todo: string;

  constructor(public memberService: MemberService) {} // constructor
  ngOnInit(): void {
    this.msg = `Member's loaded`;
    this.members$ = this.memberService.getAll().pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.msg = `Error: ${error.error.message}`;
        } else {
          this.msg = `Error: ${error.message}`;
        }
        return of([]);
      })
    );
  } // ngOnInit



}
