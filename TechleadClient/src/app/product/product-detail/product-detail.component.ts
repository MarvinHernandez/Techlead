import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Pc} from '../../models/pc';
import {Laptop} from '../../models/laptop';
import {Phone} from '../../models/phone';

import {ProductPcService} from '../../services/product-pc.service';
import {ProductLaptopService} from '../../services/product-laptop.service';
import {ProductPhoneService} from '../../services/product-phone.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from '../../home/home.component';

import {Observable, of} from 'rxjs';
import {catchError, first, map} from 'rxjs/operators';

// details dialogs
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PcDialogComponent } from '../../detailsdialog/pc-dialog.component';
import { LaptopDialogComponent } from '../../detailsdialog/laptop-dialog.component';
import { PhoneDialogComponent } from '../../detailsdialog/phone-dialog.component';

import {AuthenticationService} from '../../services/authentication.service';
import {WishlistService} from "../../services/wishlist.service";
import {Wishlist} from "../../models/wishlist";
import {ToastrService} from "ngx-toastr";
import {WishlistProduct} from "../../models/wishlistProduct";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  phone: Phone;
  laptop: Laptop;
  pc: Pc;
  selectedProduct: any;
  loginStatus: boolean;
  type: string;
  id: string;
  wishlists: Wishlist[];
  wishlistId: string;
  prodId: string;
  prodType: string;
  newWLName: string = '';

  constructor(private route: ActivatedRoute,
              private productPcService: ProductPcService,
              private productLaptopService: ProductLaptopService,
              private productPhoneService: ProductPhoneService,
              private appcontext: AuthenticationService,
              private wishlistService: WishlistService,
              private modalService: NgbModal,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.type = params.type;
    });

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;

      this.wishlistService.getByUserId(this.appcontext.currentUserValue.id).subscribe(res => {
        this.wishlists = res;
      });
    }

    if(this.type === 'phone') {
      this.wishlistService.getPhoneByProductId(this.id).subscribe(res => {
        this.phone = res;
        this.selectedProduct = res;
      });
    }

    if(this.type === 'laptop') {
      this.wishlistService.getLaptopByProductId(this.id).subscribe(res => {
        this.laptop = res;
        this.selectedProduct = res;
      });
    }

    if(this.type === 'pc') {
      this.wishlistService.getPcByProductId(this.id).subscribe(res => {
        this.pc = res;
        this.selectedProduct = res;
      });
    }
  } // ngOnInit

  addToWishlist(prodId: string, prodType: string, content): void{
    let closeResult = '';

    this.prodId = prodId;
    this.prodType = prodType;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      closeResult = `Closed with: ${result}`;
    });

    // this.wishlistService.addProductToWishlist(prodId, this.wishlistId, prodType);
  }

  onAdd(): void{
    if(this.newWLName === ''){
      let res = this.wishlistService.addProductToWishlist(this.prodId, this.wishlistId, this.prodType).subscribe(payload => {
        if(payload > 0){
          this.toastr.success('Product was successfully added to your wishlist.');
        }
        else
          this.toastr.error('Error: the product was not added to your wishlist.');
      });
    }else {
      const product: WishlistProduct = {productID: this.prodId , productType: this.prodType};

      const wishlist: Wishlist = {Id: '', wishlistName: this.newWLName, memberId: this.appcontext.currentUserValue.id, products: [product]};

      this.wishlistService.addWishlist(wishlist).subscribe(payload => {
        if (payload > 0) {
          this.toastr.success('New wishlist created. Product added to the wishlist');

        } else {
          this.toastr.error('Unable to create new wishlist');
        }
      });
    }

    this.newWLName = '';
    this.wishlistId = undefined;

    this.modalService.dismissAll();
  }
}
