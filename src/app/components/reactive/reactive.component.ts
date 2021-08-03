import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})

export class ReactiveComponent implements OnInit {

  myForm: FormGroup = new FormGroup({user: new FormControl('vasya')});
  constructor() { }

  ngOnInit(): void {
  }

}
