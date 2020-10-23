import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberHomeComponent } from './member-home/member-home.component';
import {MemberCreateComponent} from './member-create/member-create.component';


@NgModule({
  declarations: [MemberListComponent, MemberHomeComponent, MemberCreateComponent],
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
