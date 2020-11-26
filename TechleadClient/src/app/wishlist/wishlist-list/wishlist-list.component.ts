import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Wishlist } from '../../models/wishlist';
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent {
  hideForm: boolean = false;
  selectedWishlist: Wishlist;
  products: any[] = [];

  constructor(private wishlistService: WishlistService) {
  }

  @Input() wishlists: Wishlist[];
  @Output() event = new EventEmitter<any[]>();
  @Output() eventWName = new EventEmitter<string>();

  async viewDetails(wishlist: Wishlist): Promise<void>{
    this.hideForm = true;
    this.selectedWishlist = wishlist;
    let product: any;

    for(var prod of this.selectedWishlist.products){

      if(prod.productType === 'pc'){

        await this.wishlistService.getPcByProductId(prod.productID).toPromise().then((res) => {
          product = res;
          this.products.push(product);
        });

      }else if(prod.productType === 'phone'){
        product = await this.wishlistService.getPhoneByProductId(prod.productID).toPromise().then((res) => {
          product = res;
          this.products.push(product);
        });

      }else{
        product = await this.wishlistService.getLaptopByProductId(prod.productID).toPromise().then((res) => {
          product = res;
          this.products.push(product);
        });
      }
    }
    let debug = this.products.length;

    this.eventWName.emit(this.selectedWishlist.wishlistName);
    this.event.emit(this.products);
  }
}
