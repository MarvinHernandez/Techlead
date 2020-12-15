import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductFeedbackComponent} from './product-feedback.component';
import {MatComponentsModule} from '../mat-components/mat-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    declarations: [ProductFeedbackComponent],
    exports: [
        ProductFeedbackComponent
    ],
    imports: [
        CommonModule,
        MatComponentsModule,
        ReactiveFormsModule,
        SharedModule,
        MatGridListModule
    ]
})
export class ProductFeedbackModule { }
