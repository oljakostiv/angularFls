import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarModels} from "../models/car.models";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'https://92.253.237.122/api/v1'

  constructor(private httpClient: HttpClient) {

  }

  getCars(): Observable<CarModels[]> {
    return this.httpClient.get<CarModels[]>(this.url + '/' + 'cars')
  }

  postCar(car: CarModels): Observable<CarModels> {
    return this.httpClient.post<CarModels>(this.url + '/' + 'cars', car)
  }

}
