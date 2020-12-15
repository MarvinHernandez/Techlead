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

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  pcs$: Observable<Pc[]>;
  laptops$: Observable<Laptop[]>;
  phones$: Observable<Phone[]>;
  currentList: any[] = [];
  msg: string;
  loginStatus: boolean;
  loadPcs: boolean;
  loadLaptops: boolean;
  loadPhones: boolean;
  usage: string;
  budget: number;
  type: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productPcService: ProductPcService,
              private productLaptopService: ProductLaptopService,
              private productPhoneService: ProductPhoneService,
              private dialog: MatDialog,
              private appcontext: AuthenticationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.usage = params.usage;
      this.budget = params.budget;
    });
    this.currentList = [];  // empty
    // load product data
    if (this.type === 'PC')
    {
      this.pcs$ = this.productPcService.getAll().pipe(
        catchError(error => {
          if (error.error instanceof ErrorEvent) {
            this.msg = `Error: ${error.error.message}`;
          } else {
            this.msg = `Error: ${error.message}`;
          }
          return of([]);
        })
      );

      // filter
      this.filterPcs(this.pcs$);
      this.loadPcs = true;
    }
    else if (this.type === 'Laptop')
    {
      this.laptops$ = this.productLaptopService.getAll().pipe(
        catchError(error => {
          if (error.error instanceof ErrorEvent) {
            this.msg = `Error: ${error.error.message}`;
          } else {
            this.msg = `Error: ${error.message}`;
          }
          return of([]);
        })
      );

      // filter
      this.filterLaptops(this.laptops$);
      this.loadLaptops = true;
    }
    else if (this.type === 'Phone')
    {
      this.phones$ = this.productPhoneService.getAll().pipe(
        catchError(error => {
          if (error.error instanceof ErrorEvent) {
            this.msg = `Error: ${error.error.message}`;
          } else {
            this.msg = `Error: ${error.message}`;
          }
          return of([]);
        })
      );

      // filter
      this.filterPhones(this.phones$);
      this.loadPhones = true;
    }

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }

    this.msg = `${this.type} Results`;
  } // ngOnInit

  // open modals for each type of product
  // list of specifications for desired pc
  openDetailsModalPc(selectedProduct: Pc): void {
    this.router.navigate(['/product/', selectedProduct.ProductType, selectedProduct.Id]);
  }

  // list of specifications for desired laptop
  openDetailsModalLaptop(selectedProduct: Laptop): void {
    this.router.navigate(['/product/', selectedProduct.ProductType, selectedProduct.Id]);
  }

  // list of specifications for desired phone
  openDetailsModalPhone(selectedProduct: Phone): void {
    this.router.navigate(['/product/', selectedProduct.ProductType, selectedProduct.Id]);
  }

  // filter products
  // each type needs a separate function because price and usage properties are named/formatted differently
  // I didn't want to try changing things and risking something else not working
  filterPcs(products$: Observable<Pc[]>): void {
    products$.toPromise().then((res) => {
      res.forEach((product) => {
        if ((parseInt(product.price, 10) <= this.budget && (product.Usage === this.usage || this.usage === 'All')))
        {
          this.currentList.push(product);
        }
      });
    });
  }

  filterLaptops(products$: Observable<Laptop[]>): void {
    products$.toPromise().then((res) => {
      res.forEach((product) => {
        if ((parseInt(product.price, 10) <= this.budget && (product.Usage.indexOf(this.usage) > -1 || this.usage === 'All')))
        {
          this.currentList.push(product);
        }
      });
    });
  }


  filterPhones(products$: Observable<Phone[]>): void {
    products$.toPromise().then((res) => {
      res.forEach((product) => {
        if ((parseInt(product.Price, 10) <= this.budget && (product.MainUsage === this.usage || this.usage === 'All')))
        {
          this.currentList.push(product);
        }
      });
    });
  }
}
