import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberModule } from './member/member.module';
import {ProductFeedbackModule} from './product-feedback/product-feedback.module';
import { HttpClientModule } from '@angular/common/http';
import {MatComponentsModule} from './mat-components/mat-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberModule,
    HttpClientModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    ProductFeedbackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
