import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from '../mat-components/mat-components.module';

import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PcListComponent } from './product-lists/pc-list.component';
import { LaptopListComponent } from './product-lists/laptop-list.component';
import { PhoneListComponent } from './product-lists/phone-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ProductHomeComponent, PcListComponent, LaptopListComponent, PhoneListComponent, ProductDetailComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatComponentsModule,
        SharedModule,
        RouterModule
    ]
})
export class ProductModule { }
