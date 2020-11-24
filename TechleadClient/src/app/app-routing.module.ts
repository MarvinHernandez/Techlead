import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberCreateComponent} from './member/member-create/member-create.component';
import {MemberHomeComponent} from './member/member-home/member-home.component';
import {ProductFeedbackCreateComponent} from './product-feedback/product-feedback-create/product-feedback-create.component';
import {WishlistHomeComponent} from './wishlist/wishlist-home.component';
const routes: Routes = [
  {path: 'memberhome', component: MemberHomeComponent},
  {path: 'createaccount', component: MemberCreateComponent},
  {path: 'createproductfeedback', component: ProductFeedbackCreateComponent},
  {path: 'wishlisthome', component: WishlistHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
