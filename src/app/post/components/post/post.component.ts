import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../../models/post.model";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;
  @Output()
  xxx: EventEmitter<PostModel> = new EventEmitter<PostModel>();

  constructor() { }

  ngOnInit(): void {
  }

  goToPostDetails() {
    this.xxx.emit(this.post);
  }

}
