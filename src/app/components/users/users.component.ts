import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/i-user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users: IUser[];

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  goToDetails(ngForm: IUser) {
    this.router.navigate([ngForm.id], {relativeTo: this.activatedRoute})
  }

}
