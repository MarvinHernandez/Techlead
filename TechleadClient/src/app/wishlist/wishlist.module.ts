import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistHomeComponent } from './wishlist-home.component';
import { WishlistDetailComponent } from './wishlist-detail.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [WishlistHomeComponent, WishlistDetailComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class WishlistModule { }
