import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserModel [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
