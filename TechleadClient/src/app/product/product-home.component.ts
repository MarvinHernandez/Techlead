import { Component, OnInit } from '@angular/core';

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

import { DeleteDialogComponent } from '../deletedialog/delete-dialog.component';
import { DeleteDialogComponent } from '../deletedialog/delete-dialog.component';
import { DeleteDialogComponent } from '../deletedialog/delete-dialog.component';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html'
})
export class ProductHomeComponent implements OnInit {
  // will need individual observables for different product types
  // each of them will need to load separately
  pcs$: Observable<Pc[]>;
  pc: Pc;
  laptops$: Observable<Laptop[]>;
  laptop: Laptop;
  phones$: Observable<Phone[]>;
  phone: Phone;
  msg: string;

  constructor(public productPcService: ProductPcService, 
              public productLaptopService: ProductLaptopService, 
              public productPhoneService: ProductPhoneService, 
              private dialog: MatDialog) { }

  ngOnInit(): void {
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

    /// load laptop data
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
  } // ngOnInit

  // open modals for each type of product
  // list of specifications for desired pc
  openDetailsModalPc(selectedProduct: Pc): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: `${selectedProduct.nickName}`,
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

        // this.deleted.emit(this.selectedVendor);
      }
    });
  }


}
