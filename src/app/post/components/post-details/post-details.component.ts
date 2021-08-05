import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../../models/post.model";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  postDtl: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
