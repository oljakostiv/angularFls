import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../models/i-post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post:IPost

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private postService:PostService) {
    this.activatedRoute.params.subscribe(value=>{
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
      }else {
        this.postService.getPostById(value.id).subscribe(item => this.post = item)
      }
    })
  }

  ngOnInit(): void {
  }

}
