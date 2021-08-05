import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PostModel} from "../../models/post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.url)
  }

  getPostDetails(id: number): Observable<PostModel> {
    return this.httpClient.get<PostModel>(this.url + '/' + id)
  }
}
