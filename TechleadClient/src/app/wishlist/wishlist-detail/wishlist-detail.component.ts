import {Component, Input, OnInit} from '@angular/core';
import {Wishlist} from "../../models/wishlist";
import {WishlistService} from "../../services/wishlist.service";
import {from} from "rxjs";
import {Phone} from "../../models/phone";
import {map} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.scss']
})
export class WishlistDetailComponent implements OnInit {
  @Input() selectedWishlistProducts: any[];
  @Input() selectedWishlistId: string;

  constructor(private wishlistService: WishlistService, private toastr: ToastrService) {}

  ngOnInit(): void {

  }

  deleteProduct(prodId: string) : void{
    this.wishlistService.deleteByProductId(prodId, this.selectedWishlistId).subscribe(payload => {
      if(payload > 0){
        this.selectedWishlistProducts = this.selectedWishlistProducts.filter( prod => prod.Id !== prodId);

        this.toastr.success('Product was successfully deleted form your wishlist.');
      }
      else
        this.toastr.error('Error: the product was not deleted');
    });
  }
}
