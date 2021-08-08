import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CarModel} from "../../../models";
import {DataTransferService} from "../../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: CarModel[];

  constructor(private router: Router, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.dataTransferService.getData().subscribe(value => this.cars = value)
  }

}
