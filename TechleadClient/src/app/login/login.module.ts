import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './login.component'
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [ LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
