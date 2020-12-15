import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { Member } from '../models/member';
import { GenericHttpService} from '../services/generic-http.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberService extends GenericHttpService<Member> {
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/members`);
  } // constructor

  public addMember(item: Member): Observable<number> {
    return this.http.post<number>(`${BASEURL}/api/members`, item);
  } // addMember
} // member
