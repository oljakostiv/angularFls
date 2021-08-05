import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDtl: UserModel;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUserById(id).subscribe(value => this.userDtl = value)
    })
  }

  ngOnInit(): void {
  }

}
