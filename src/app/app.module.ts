import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/basic.routes";
import { UserWithPostsComponent } from './user-with-posts/userWithPosts.component';
import {PostComponent} from "./post/post.component";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserWithPostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
