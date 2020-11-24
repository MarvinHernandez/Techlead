import {Component, Input, OnInit} from '@angular/core';
import { Wishlist } from '../../models/wishlist';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent {

  @Input() wishlists: Wishlist[];


}
