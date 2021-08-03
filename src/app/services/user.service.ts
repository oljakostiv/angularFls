import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models/i-car";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this.url)

  }

  getUserById(id: number): Observable<ICar>{
    return this.httpClient.get<ICar>(this.url + '/' + id)
  }
}
