import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import {PostService} from "../post/services/post.service";
import { UserComponent } from './components/user/user.component';
import {UserDetailsComponent} from './components/user.details/user.details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    PostService
  ]
})
export class UserModule { }
