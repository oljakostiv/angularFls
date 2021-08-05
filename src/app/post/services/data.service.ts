import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private activeBtn = new BehaviorSubject<number>(0);

  constructor() {
  }

  setActivate(id: number): void {
    this.activeBtn.next(id)
  }

  getBActivate(): Observable<number> {
    return this.activeBtn
  }
}
