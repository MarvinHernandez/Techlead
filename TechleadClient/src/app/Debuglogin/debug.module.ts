import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugLoginComponent} from './debuglogin.component'


@NgModule({
  declarations: [ DebugLoginComponent],
  exports: [
    DebugLoginComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule
  ]
})
export class DebugModule { }
