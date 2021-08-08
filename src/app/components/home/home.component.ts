import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarFullModel} from "../../models";
import {DataTransferService} from "../../services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carFull: CarFullModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataTransferService: DataTransferService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({cars}) => {
      this.carFull = cars
      this.dataTransferService.setData(this.carFull.data)
    })
  }

}
