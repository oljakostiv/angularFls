import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../models/i-car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICar;

  constructor() { }

  ngOnInit(): void {
  }

}
