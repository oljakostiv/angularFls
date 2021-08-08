import { Injectable } from '@angular/core';
import {CarService} from "../car.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CarFullModel} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarFullResolveService implements Resolve<CarFullModel>{

  constructor(private carService: CarService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarFullModel> | Promise<CarFullModel> | CarFullModel {
    return this.carService.getAll()
  }
}
