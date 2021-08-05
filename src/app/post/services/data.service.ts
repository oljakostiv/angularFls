import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private activeBtn = new BehaviorSubject<number>(0);

  constructor() {
  }

  getActivate(): Observable<number> {
    return this.activeBtn
  }

  setActivate(id: number): void {
    this.activeBtn.next(id)
  }

}
