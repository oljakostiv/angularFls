import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PostModel} from "../../models/post.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = environment.url

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.url)
  }
}
