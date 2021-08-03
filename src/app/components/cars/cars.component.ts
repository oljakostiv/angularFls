import {Component, OnInit} from '@angular/core';
import {CarModels} from "../../models/car.models";
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: CarModels[];
  form: FormGroup;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      model: new FormControl(''),
      price: new FormControl(''),
      year: new FormControl('')

    })
    this.carService.getCars().subscribe(value => this.cars = value)
  }

  save(): void {
    this.carService.postCar(this.form.getRawValue()).subscribe(value => this.cars = [...this.cars, value])
  }

}
