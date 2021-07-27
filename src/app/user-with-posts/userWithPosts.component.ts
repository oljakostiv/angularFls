import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../models/IUser";
import {PostService} from "../servises/post.service";
import {IPost} from "../models/IPost";

@Component({
  selector: 'app-user',
  templateUrl: './userWithPosts.component.html',
  styleUrls: ['./userWithPosts.component.scss']
})
export class UserWithPostsComponent implements OnInit {

  @Input()
  user: IUser;
  posts:IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPostsByUserId(this.user.id).subscribe(posts => this.posts = posts)
  }

}
