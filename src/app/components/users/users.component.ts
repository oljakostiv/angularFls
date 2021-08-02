import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/i-user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  goToDetails(tref: HTMLFormElement) {
console.log(this.users)
  }

}
