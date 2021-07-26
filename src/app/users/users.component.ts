import {Component} from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: IUserModel[] = [
    {name: 'ivan', age: 25, status: true},
    {name: 'ihor', age: 23, status: false},
    {name: 'stepan', age: 28, status: true}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
