import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../../models/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostModel [];

  constructor() { }

  ngOnInit(): void {
  }

}
