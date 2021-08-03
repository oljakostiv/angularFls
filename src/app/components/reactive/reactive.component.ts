import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})

export class ReactiveComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({user: new FormControl('', Validators.required)});
  constructor() { }

  ngOnInit(): void {
  }

  // save() {
    // console.log(this.myForm)
  // }
}
