import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PostModel} from "../../models/post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]('https://jsonplaceholder.typicode.com/posts')
  }
}
