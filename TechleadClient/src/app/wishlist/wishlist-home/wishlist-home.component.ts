import { Component, OnInit } from '@angular/core';
import {Wishlist} from '../../models/wishlist';
import {WishlistService} from '../../services/wishlist.service'
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {AuthenticationService} from "../../services/authentication.service";
import { WishlistListComponent } from "../wishlist-list/wishlist-list.component";

@Component({
  selector: 'app-wishlist-home',
  templateUrl: './wishlist-home.component.html',
  styleUrls: ['./wishlist-home.component.scss']
})
export class WishlistHomeComponent implements OnInit {
  wishlists: Wishlist[];
  wishlists$: Observable<Wishlist[]>;
  msg: string;
  loginStatus: boolean;
  membername: string;
  selectedWishlist: Wishlist;

  constructor(public wishlistService: WishlistService, private appcontext: AuthenticationService) { }

  ngOnInit(): void {
    this.wishlists$ = this.wishlistService.getByUserId(this.appcontext.currentUserValue.id).pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.msg = `Error: ${error.error.message}`;
        } else {
          this.msg = `Error: ${error.message}`;
        }
        return of([]);
      })
    );
    this.membername = this.appcontext.currentUserValue.username;
    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }
  }

  receiveSelectedWishlist($event) {
    this.selectedWishlist = $event;
  }
}
