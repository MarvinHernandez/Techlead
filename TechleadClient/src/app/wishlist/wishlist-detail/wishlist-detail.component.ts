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

  deleteProduct(prodId: string): void{
    // window.location.href
    this.wishlistService.deleteByProductId(prodId, this.selectedWishlistId).subscribe(payload => {
      if(payload > 0){
        this.selectedWishlistProducts = this.selectedWishlistProducts.filter( prod => prod.Id !== prodId);

        this.toastr.success('Product was successfully deleted form your wishlist.');
      }
      else
        this.toastr.error('Error: the product was not deleted');
    });
  }

  reviewSearch(prodName: string, searchType: string): void {

    const queryWords = prodName.split(' ');
    let searchLink: string;

    if (searchType === 'google'){
      searchLink = 'https://www.google.com/search?q=';

      searchLink += `${queryWords[0]}`;
      for (let i = 1; i < queryWords.length; i++){
        searchLink += `+${queryWords[i]}`;
      }
      searchLink += '+review';
    }else{
      searchLink = 'https://www.youtube.com/results?search_query=';

      searchLink += `${queryWords[0]}`;
      for (let i = 1; i < queryWords.length; i++){
        searchLink += `+${queryWords[i]}`;
      }
      searchLink += '+review+&sp=CAM%253D';
    }

    window.open(searchLink, '_blank').focus();

    //also work but link is opened in the same page
    // window.location.replace(searchLink);
    // window.location.href = searchLink;
  }


    // https://www.youtube.com/results?search_query=test+&sp=CAM%253D
}
