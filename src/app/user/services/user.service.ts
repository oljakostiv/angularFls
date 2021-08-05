import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.url)
  }
}


