import {Injectable, Optional} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CarModel} from "../models";


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
private data = new BehaviorSubject<any>(null)

  constructor() { }

  getData(): Observable<any> {
  return this.data
  }

  setData(cars: CarModel[]): void {
  this.data.next(cars)
  }
}
