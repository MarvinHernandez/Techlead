import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MemberCreateComponent} from './member/member-create/member-create.component';
import {MemberHomeComponent} from './member/member-home/member-home.component';
import {ProductFeedbackCreateComponent} from './product-feedback/product-feedback-create/product-feedback-create.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {WishlistHomeComponent} from './wishlist/wishlist-home/wishlist-home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'memberhome', component: MemberHomeComponent, canActivate: [AuthGuard] },
  {path: 'createaccount', component: MemberCreateComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wishlisthome', component: WishlistHomeComponent},
  {path: 'createproductfeedback', component: ProductFeedbackCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
