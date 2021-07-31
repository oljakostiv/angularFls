import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/i-user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    this.activatedRoute.params.subscribe(value=> {
     if (this.router.getCurrentNavigation()?.extras.state) {
       this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
     }else {
       this.userService.getUserById(value.id).subscribe(item => this.user = item)
     }

    })
  }

  ngOnInit(): void {
  }

}
