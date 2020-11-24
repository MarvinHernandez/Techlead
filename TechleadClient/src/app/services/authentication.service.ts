import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASEURL } from '../constants';
import { Member } from '../models/member';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Member>;
  public currentUser: Observable<Member>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Member>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Member {
    return this.currentUserSubject.value;
  }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    return this.http.post<any>(`${BASEURL}/api/login`, { username, password })
      .pipe(map(token => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(token));
        this.currentUserSubject.next(token);
        return true;
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
