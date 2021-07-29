import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post:IPost
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(()=>{
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
    })
  }

  ngOnInit(): void {
  }

}
