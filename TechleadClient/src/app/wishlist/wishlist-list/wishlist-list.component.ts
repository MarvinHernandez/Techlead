import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Wishlist } from '../../models/wishlist';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent {
  hideForm: boolean = false;
  selectedWishlist: Wishlist;

  constructor() {
  }

  @Input() wishlists: Wishlist[];
  @Output() event = new EventEmitter<Wishlist>();

  viewDetails(wishlist: Wishlist): void{
    this.hideForm = true;
    this.selectedWishlist = wishlist;
    this.event.emit(this.selectedWishlist);
  }
}
