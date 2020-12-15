import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Wishlist } from '../../models/wishlist';
import {WishlistService} from "../../services/wishlist.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent {
  hideForm: boolean = false;
  selectedWishlist: Wishlist;
  products: any[] = [];

  constructor(private wishlistService: WishlistService, private toastr: ToastrService) {
  }

  @Input() wishlists: Wishlist[];
  @Output() event = new EventEmitter<any[]>();
  @Output() eventWName = new EventEmitter<string>();
  @Output() eventWishlistId = new EventEmitter<string>();

  delete(wishlist: Wishlist): void{
    this.wishlistService.deleteByWishlist(wishlist).subscribe(payload => {
      if(payload > 0){
        this.wishlists = this.wishlists.filter( wl => wl.Id !== wishlist.Id);
        this.toastr.success('Wishlist was successfully deleted.');
      }
      else
        this.toastr.error('Error: wishlist was not deleted');
    });
  }

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
    this.eventWishlistId.emit(this.selectedWishlist.Id);
    this.event.emit(this.products);
  }
}
