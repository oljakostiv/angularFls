import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../../models/post.model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post.details',
  templateUrl: './post.details.component.html',
  styleUrls: ['./post.details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDtl: PostModel;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.postService.getPostDetails(id).subscribe(value => this.postDtl= value)
    // })
  }

  ngOnInit(): void {
  }

}
