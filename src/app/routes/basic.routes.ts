import {Routes} from "@angular/router";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {UsersComponent} from "../components/users/users.component";

export let routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id', component: UserDetailsComponent
      }
    ]
  }
]
