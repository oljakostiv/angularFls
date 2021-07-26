import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {name: 'ivan', age: 25, status: true},
    {name: 'ihor', age: 23, status: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
