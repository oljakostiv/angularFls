import { Component, OnInit } from '@angular/core';
import {IUser} from "../models/IUser";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../servises/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute : ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id})=> {
      this.userService.getUserById(id).subscribe(value => this.user = value);
    });
  }

  ngOnInit(): void {
  }

}
