import {Component, Input, OnInit} from '@angular/core';
import {CarModels} from "../../models/car.models";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input()
  car: CarModels;

  constructor() { }

  ngOnInit(): void {
  }

}
