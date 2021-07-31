import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {IUser} from "./models/i-user";
import {IPost} from "./models/i-post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Angular!';

  @Input()
  users: IUser;
  posts: IPost;

  constructor(private router: Router) {
  }

  goToUsers() {
    this.router.navigate(['users'], {state: this.users})
  }

  goToPosts() {
    this.router.navigate(['posts'], {state: this.posts})
  }
}
