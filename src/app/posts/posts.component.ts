import { Component, OnInit } from '@angular/core';
import {PostService} from "../servises/post.service";
import {IPost} from "../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[]

  constructor(private postsService: PostService) {
  }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(value => this.posts = value);
  }

}

