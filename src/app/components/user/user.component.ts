import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/i-user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  // goToDetails(tref: HTMLFormElement) {
  //   console.log(this.user)
  //   this.router.navigate(['users', this.user.id], {state: this.user})
  // }
}
