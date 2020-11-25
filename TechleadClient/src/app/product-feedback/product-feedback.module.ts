import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductFeedbackCreateComponent} from './product-feedback-create/product-feedback-create.component';
import {MatComponentsModule} from '../mat-components/mat-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ProductFeedbackCreateComponent],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductFeedbackModule { }
