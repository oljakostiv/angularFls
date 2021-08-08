import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from "../../../../models";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input()
  car: CarModel;
  constructor() { }

  ngOnInit(): void {
  }

}
