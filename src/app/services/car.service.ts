import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models/i-car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'https://92.253.237.122/api/v1'

  constructor(private httpClient: HttpClient) {

  }

  getCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this.url + '/' + 'cars')
  }

  postCar(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(this.url + '/' + 'cars', car)
  }

}
