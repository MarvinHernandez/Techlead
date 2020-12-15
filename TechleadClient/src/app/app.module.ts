import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberModule } from './member/member.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { LoginModule } from './login/login.module';
import {ProductFeedbackModule} from './product-feedback/product-feedback.module';
import { HttpClientModule } from '@angular/common/http';
import {MatComponentsModule} from './mat-components/mat-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';

import { PcDialogComponent } from './detailsdialog/pc-dialog.component';
import { LaptopDialogComponent } from './detailsdialog/laptop-dialog.component';
import { PhoneDialogComponent } from './detailsdialog/phone-dialog.component';


// ? for home component
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductModule} from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PcDialogComponent,
    LaptopDialogComponent,
    PhoneDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MemberModule,
        HttpClientModule,
        MatComponentsModule,
        BrowserAnimationsModule,
        ProductFeedbackModule,
        WishlistModule,
        ProductModule,
        ReactiveFormsModule,
        LoginModule,
        SharedModule,
        ToastrModule.forRoot({
            timeOut: 3500,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        }),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
