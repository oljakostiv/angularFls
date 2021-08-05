import {Component, OnInit, ViewChild} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userId: number;
  users: UserModel[];
  @ViewChild('formdata') myForm: NgForm;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  goToDetails(form: NgForm) {
    console.log(this.myForm);
    const userId = this.myForm.value
    this.router.navigate([userId], {relativeTo: this.activatedRoute})
  }

}
