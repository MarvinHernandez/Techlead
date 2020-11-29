import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductFeedbackComponent} from './product-feedback.component';
import {MatComponentsModule} from '../mat-components/mat-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ProductFeedbackComponent],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductFeedbackModule { }
