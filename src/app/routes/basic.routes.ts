import {Routes} from "@angular/router";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";

export let routes: Routes = [
  {
    path: '', component: PostsComponent
  },
  {
    path: 'posts/:id', component: PostDetailsComponent
  },
  {
    path: 'posts', redirectTo: '', pathMatch: 'full'
  },
];
