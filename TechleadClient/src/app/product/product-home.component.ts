import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Pc} from '../models/pc';
import {Laptop} from '../models/laptop';
import {Phone} from '../models/phone';

import {ProductPcService} from '../services/product-pc.service';
import {ProductLaptopService} from '../services/product-laptop.service';
import {ProductPhoneService} from '../services/product-phone.service';

import {HomeComponent} from '../home/home.component';

import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

// details dialogs
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PcDialogComponent } from '../detailsdialog/pc-dialog.component';
import { LaptopDialogComponent } from '../detailsdialog/laptop-dialog.component';
import { PhoneDialogComponent } from '../detailsdialog/phone-dialog.component';

import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html'
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: `${selectedProduct.NickName}`,
      entityname: 'pc',

      id: selectedProduct.Id,
      price: selectedProduct.price,
      usage: selectedProduct.Usage,
      specs: selectedProduct.Specs
    };
    dialogConfig.panelClass = 'custommodal';
    const dialogRef = this.dialog.open(PcDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this is where i would add the item to a wishlist /////////////////////////////////////////////////
        // i assume there would need to be away to recognize which user is signed in
        // and you would add it to them
        // i don't currently know if members have a wishlist[] field that you could add to
        // i also don't think it's currently set up to have a member selected

      }
    });
  }

  // list of specifications for desired laptop
  openDetailsModalLaptop(selectedProduct: Laptop): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: `${selectedProduct.Name}`,
      entityname: 'laptop',

      id: selectedProduct.Id,
      company: selectedProduct.Company,
      operatingsystem: selectedProduct.OS,
      usage: selectedProduct.Usage, // array
      screensize: selectedProduct.ScreenSize,
      cpuprovider: selectedProduct.CpuProvider,
      cpu: selectedProduct.Cpu,
      screenresolution: selectedProduct.ScreenResolution,
      touch: selectedProduct.touch,
      twoinone: selectedProduct.TwoInOne,
      buildquality: selectedProduct.BuildQuality,
      ram: selectedProduct.Ram,
      storage: selectedProduct.Storage,
      price: selectedProduct.price
    };
    dialogConfig.panelClass = 'custommodal';
    const dialogRef = this.dialog.open(LaptopDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // some code
      }
    });
  }

  // list of specifications for desired phone
  openDetailsModalPhone(selectedProduct: Phone): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: `${selectedProduct.Name}`,
      entityname: 'phone',

      id: selectedProduct.Id,
      company: selectedProduct.Company,
      type: selectedProduct.Type,
      price: selectedProduct.Price,
      positives: selectedProduct.positive,
      usage: selectedProduct.MainUsage,
      cpu: selectedProduct.Cpu,
      ram: selectedProduct.Ram,
      screensize: selectedProduct.ScreenSize,
      fivegsupport: selectedProduct.FiveGSupport
    };
    dialogConfig.panelClass = 'custommodal';
    const dialogRef = this.dialog.open(PhoneDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // some code
      }
    });
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
