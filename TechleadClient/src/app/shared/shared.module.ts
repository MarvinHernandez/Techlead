import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavMenuComponent],
  exports: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
