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
import {catchError, map} from 'rxjs/operators';

// details dialogs
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PcDialogComponent } from '../../detailsdialog/pc-dialog.component';
import { LaptopDialogComponent } from '../../detailsdialog/laptop-dialog.component';
import { PhoneDialogComponent } from '../../detailsdialog/phone-dialog.component';

import {AuthenticationService} from '../../services/authentication.service';
import {WishlistService} from '../../services/wishlist.service';
import {Wishlist} from '../../models/wishlist';

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

  constructor(private route: ActivatedRoute,
              private productPcService: ProductPcService,
              private productLaptopService: ProductLaptopService,
              private productPhoneService: ProductPhoneService,
              private appcontext: AuthenticationService,
              private wishlistService: WishlistService,
              private modalService: NgbModal) { }

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

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      closeResult = `Closed with: ${result}`;
    });

    // this.wishlistService.addProductToWishlist(prodId, this.wishlistId, prodType);
  }
}
