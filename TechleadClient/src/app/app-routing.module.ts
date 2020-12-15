import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MemberCreateComponent} from './member/member-create/member-create.component';
import {MemberHomeComponent} from './member/member-home/member-home.component';
import {ProductFeedbackComponent} from './product-feedback/product-feedback.component';
import { ProductHomeComponent } from './product/product-home/product-home.component'
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {WishlistHomeComponent} from './wishlist/wishlist-home/wishlist-home.component';
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'memberhome', component: MemberHomeComponent, canActivate: [AuthGuard] },
  {path: 'createaccount', component: MemberCreateComponent},
  {path: '', component: HomeComponent},
  {path: 'products/:type/:usage/:budget', component: ProductHomeComponent},
  {path: 'product/:type/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wishlisthome', component: WishlistHomeComponent, canActivate: [AuthGuard]},
  {path: 'productfeedback', component: ProductFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
