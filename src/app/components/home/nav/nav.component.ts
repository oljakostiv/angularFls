import {Component, Input, OnInit} from '@angular/core';
import {LinksModel} from "../../../models";
import {Router} from "@angular/router";
import {CarService, DataTransferService} from "../../../services";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()
  links: LinksModel;

  constructor(private router: Router, private carService: CarService, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  next() {
    this.carService.getAll(this.links.next).subscribe(value => {
      this.links = value.links
      this.dataTransferService.setData(value.data)
    });
  }

  prev() {
    // history.back()
    this.carService.getAll(this.links.prev).subscribe(value => {
      this.links = value.links
      this.dataTransferService.setData(value.data)
    }); -1
}}
