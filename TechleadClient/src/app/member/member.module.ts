import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberHomeComponent } from './member-home/member-home.component';


@NgModule({
  declarations: [MemberListComponent, MemberHomeComponent],
  exports: [
    MemberHomeComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule
  ]
})
export class MemberModule { }
