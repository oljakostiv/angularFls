import {Component, Input, OnInit} from '@angular/core';
import {UserComponent} from "../user/user.component";
import {IUser} from "../../models/i-user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  formTd = {
    allUsers: UserComponent
  }

  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails(tref: HTMLFormElement) {
      this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }


}
