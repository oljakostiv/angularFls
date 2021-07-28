import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basic.routes";
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
