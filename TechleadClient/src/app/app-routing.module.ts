import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberCreateComponent} from './member/member-create/member-create.component';
import {MemberHomeComponent} from './member/member-home/member-home.component';
import {ProductFeedbackCreateComponent} from './product-feedback/product-feedback-create/product-feedback-create.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'memberhome', component: MemberHomeComponent},
  {path: 'createaccount', component: MemberCreateComponent},
  {path: 'createproductfeedback', component: ProductFeedbackCreateComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
