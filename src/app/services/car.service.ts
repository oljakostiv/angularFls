import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarFullModel, CarModel} from "../models";
import {urls} from "../contstants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(url: string|null = null, limit: number = 10, offset = 0): Observable<CarFullModel> {
    return this.httpClient.get<CarFullModel>(url || urls.cars, {
      // params: new HttpParams({
      //   fromObject: {
      //     limit,
      //     offset
      //   }
      // })
    })
  }

  getById(id: number): Observable<CarModel> {
    return this.httpClient.get<CarModel>(`${urls.cars}/${id}`)
  }
}
