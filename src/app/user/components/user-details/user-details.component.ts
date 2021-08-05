import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  userDtl: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
