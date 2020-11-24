import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistHomeComponent } from './wishlist-home/wishlist-home.component';
import { WishlistDetailComponent } from './wishlist-detail.component';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from "@angular/material/grid-list";




@NgModule({
  declarations: [WishlistListComponent, WishlistHomeComponent],
  exports: [
    WishlistHomeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatGridListModule
  ]
})
export class WishlistModule { }
