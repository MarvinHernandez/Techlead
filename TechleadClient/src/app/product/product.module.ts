import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from '../mat-components/mat-components.module';

import { ProductHomeComponent } from './product-home.component';
import { PcListComponent } from './pc-list.component';
import { LaptopListComponent } from './laptop-list.component';
import { PhoneListComponent } from './phone-list.component';



@NgModule({
  declarations: [ProductHomeComponent, PcListComponent, LaptopListComponent, PhoneListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatComponentsModule
  ]
})
export class ProductModule { }
