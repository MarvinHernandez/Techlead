import {Component, Input, OnInit} from '@angular/core';
import {Wishlist} from "../../models/wishlist";
import {WishlistService} from "../../services/wishlist.service";
import {from} from "rxjs";
import {Phone} from "../../models/phone";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styles: [
  ]
})
export class WishlistDetailComponent implements OnInit {
  @Input() selectedWishlist: Wishlist;

  products: any[] = [];
  product: any;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    for(var product of this.selectedWishlist.products){
      if(product.productType === 'pc'){
        this.product = this.wishlistService.getPcByProductId(product.productId);
        this.products.push(this.product);
      }else if(product.productType === 'phone'){
        this.wishlistService.getPhoneByProductId(product.productId);
        //   .pipe(
        //   map(res => {
        //     this.product = res;
        //   })
        // );
        // this.wishlistService.getPhoneByProductId(product.productId).subscribe(p => this.product = p);
        this.products.push(this.product);
      }else{
        this.product = this.wishlistService.getLaptopByProductId(product.productId);
        this.products.push(this.product);
      }
    }
    let debug = this.products.length;
  }

}
