import { Component, OnInit } from '@angular/core';
import {Wishlist} from '../models/wishlist';
import {WishlistService} from '../services/wishlist.service'
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-wishlist-home',
  templateUrl: './wishlist-home.component.html',
  styles: [
  ]
})
export class WishlistHomeComponent implements OnInit {
  wishlists: Wishlist[];
  msg: string;

  constructor(public wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getByUserId('5fbaf38f5b714f147d12a246').subscribe( payload => {
      if (payload !== null) {
        this.wishlists = payload;
      } else {
        this.msg = 'No wishlists found!';
      }
    },
  err => {
      this.msg = `Error - getByUserId - ${err.status} - ${err.statusText}`;
    });
    let debug = this.wishlists.length;
    this.msg = debug.toString();
  }

}
