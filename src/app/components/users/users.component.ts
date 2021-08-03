import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/i-user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users: IUser[];

 @Input()
 user: IUser

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  goToDetails(tref: HTMLFormElement) {
    console.log(this.user)
    this.router.navigate(['users', this.user.id], {state: this.user})
  }

}
