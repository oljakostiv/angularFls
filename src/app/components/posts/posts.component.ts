import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/i-post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {this.postService.getPosts().subscribe(value => this.posts = value);
  }

}
