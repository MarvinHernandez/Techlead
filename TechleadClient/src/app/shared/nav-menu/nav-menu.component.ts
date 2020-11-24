import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit, OnDestroy {
  @Input() MemberLoginStatus: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if(authenticationService.currentUserValue){
      this.MemberLoginStatus = true;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.MemberLoginStatus = false;
    this.router.navigate(['/']);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }


}
