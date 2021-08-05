import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../../models/post.model";
import {DataService} from "../../services/data.service";


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

  check: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getActivate().subscribe(value => this.check = value)
  }

  goToPostDetails() {
    this.xxx.emit(this.post);
  }
}
