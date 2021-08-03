import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarModels} from "../models/car.models";
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class CarService {

  url = environment.url;

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<CarModels[]> {
    return this.httpClient.get<CarModels[]>(this.url)
  }

  postCar(car: CarModels): Observable<CarModels> {
    return this.httpClient.post<CarModels>(this.url, car)
  }

}
