import {Component, Input, OnInit} from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {

  @Input() members: Member[];


}
