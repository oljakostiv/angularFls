import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userId: UserModel;
  users: UserModel[];

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  goToDetails(tref: HTMLFormElement) {
    console.log(tref);
    const userId = this.userId
    this.router.navigate([userId], {relativeTo: this.activatedRoute})
  }

}
