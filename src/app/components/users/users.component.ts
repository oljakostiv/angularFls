import {Component, OnInit} from '@angular/core';
import {UserModels} from "../../models/user.models";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

 users: UserModels[];

  myFormUsers: FormGroup = new FormGroup({user: new FormControl('', Validators.required)});

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  details() {
    const userId = this.myFormUsers.controls.user.value;
    this.router.navigate([userId], {relativeTo:this.activatedRoute})
  }
}
