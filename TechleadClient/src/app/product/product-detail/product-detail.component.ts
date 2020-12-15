import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Pc} from '../../models/pc';
import {Laptop} from '../../models/laptop';
import {Phone} from '../../models/phone';

import {ProductPcService} from '../../services/product-pc.service';
import {ProductLaptopService} from '../../services/product-laptop.service';
import {ProductPhoneService} from '../../services/product-phone.service';

import {HomeComponent} from '../../home/home.component';

import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

// details dialogs
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PcDialogComponent } from '../../detailsdialog/pc-dialog.component';
import { LaptopDialogComponent } from '../../detailsdialog/laptop-dialog.component';
import { PhoneDialogComponent } from '../../detailsdialog/phone-dialog.component';

import {AuthenticationService} from '../../services/authentication.service';
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  phone: Phone = null;
  laptop: Laptop;
  pc: Pc;
  loginStatus: boolean;
  type: string;
  id: string;

  constructor(private route: ActivatedRoute,
              private productPcService: ProductPcService,
              private productLaptopService: ProductLaptopService,
              private productPhoneService: ProductPhoneService,
              private appcontext: AuthenticationService,
              private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.type = params.type;
    });

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }

    if(this.type === 'phone') {
      this.wishlistService.getPhoneByProductId(this.id).subscribe(res => {
        this.phone = res;
      });
    }

  } // ngOnInit

  // ngOnAfterInit(): void{
  //   if(this.type === 'phone') {
  //     this.wishlistService.getPcByProductId(this.id).subscribe(res => {
  //       this.product = res;
  //     });
  //   }
  // }


}
