import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../../models/post.model";
import {PostService} from "../../services/post.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostModel [];
  post: PostModel;

  constructor(private postService: PostService, private dataService: DataService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

  catchEE(obj: PostModel) {
    this.post = obj;
    this.dataService.setActivate(this.post.id)
  }
}
