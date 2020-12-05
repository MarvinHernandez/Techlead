import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Pc} from '../models/pc';
import {Laptop} from '../models/laptop';
import {Phone} from '../models/phone';

import {ProductPcService} from '../services/product-pc.service';
import {ProductLaptopService} from '../services/product-laptop.service';
import {ProductPhoneService} from '../services/product-phone.service';

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
  // will need individual observables for different product types
  // each of them will need to load separately
  // add booleans for which type is selected when page opens
  // so html can render the correct list
  pcs$: Observable<Pc[]>;
  // pc: Pc;
  // laptops$: Observable<Laptop[]>;
  laptops: Laptop[];
  // laptop: Laptop;
  phones$: Observable<Phone[]>;
  // phone: Phone;
  msg: string;
  loginStatus: boolean;
  usage: string;
  budget: string;
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

    // load pc data
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

    // load laptop data
    // this.laptops$ = this.productLaptopService.getAll().pipe(
    //   catchError(error => {
    //     if (error.error instanceof ErrorEvent) {
    //       this.msg = `Error: ${error.error.message}`;
    //     } else {
    //       this.msg = `Error: ${error.message}`;
    //     }
    //     return of([]);
    //   })
    // );
    this.productLaptopService.getAll().subscribe( laptops => {
      this.laptops = laptops;
    });

    // load phone data
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

    if (this.appcontext.currentUserValue) {
      this.loginStatus = true;
    }

    this.msg = this.type;
  } // ngOnInit

  // open modals for each type of product
  // list of specifications for desired pc
  openDetailsModalPc(selectedProduct: Pc): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: `${selectedProduct.NickName}`,
      entityname: 'pc'
    };
    dialogConfig.panelClass = 'custommodal';
    const dialogRef = this.dialog.open(PcDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this is where i would add the item to a wishlist ///////////////////////////////////////////////// julia
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
      entityname: 'laptop'
    };
    dialogConfig.panelClass = 'custommodal';
    const dialogRef = this.dialog.open(LaptopDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

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
      entityname: 'phone'
    };
    dialogConfig.panelClass = 'custommodal';
    const dialogRef = this.dialog.open(PhoneDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
