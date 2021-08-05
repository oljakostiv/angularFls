import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;

  @Output()
  xxx: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  constructor() { }

  ngOnInit(): void {
  }

  goToUserDetails() {
    this.xxx.emit(this.user);
  }


}
