import {Routes} from "@angular/router";
import {PostsComponent} from "../components/posts/posts.component";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {PostGuardsService} from "../servises/post-guards.service";

export let routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canDeactivate: [PostGuardsService]
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
    canActivate: [PostGuardsService],
    canDeactivate: [PostGuardsService],
  },
  {
    path: 'posts',
    redirectTo: '',
    pathMatch: 'full'
  },
];
