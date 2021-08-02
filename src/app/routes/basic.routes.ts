import {Routes} from "@angular/router";
import {UserComponent} from "../components/user/user.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";

export let routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: ':id', component: UserDetailsComponent
      }
    ]
  }
]
