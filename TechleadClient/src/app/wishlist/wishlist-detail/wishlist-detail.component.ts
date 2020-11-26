import {Component, Input, OnInit} from '@angular/core';
import {Wishlist} from "../../models/wishlist";
import {WishlistService} from "../../services/wishlist.service";
import {from} from "rxjs";
import {Phone} from "../../models/phone";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.scss']
})
export class WishlistDetailComponent implements OnInit {
  @Input() selectedWishlistProducts: any[];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {

  }
}
