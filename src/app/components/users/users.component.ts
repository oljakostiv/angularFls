import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/i-user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

 users: IUser[];
 @Input()
 user: IUser;

  myFormUsers: FormGroup = new FormGroup({user: new FormControl('', Validators.required)});

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  details() {
    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute, state: this.user})
  }
}
