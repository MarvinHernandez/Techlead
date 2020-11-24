import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistHomeComponent } from './wishlist-home.component';
import { WishlistDetailComponent } from './wishlist-detail.component';



@NgModule({
  declarations: [WishlistHomeComponent, WishlistDetailComponent],
  imports: [
    CommonModule
  ]
})
export class WishlistModule { }
