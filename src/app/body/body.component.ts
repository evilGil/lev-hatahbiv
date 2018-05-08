import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-body',
  templateUrl: './body.component.html',
  styles: [`
  .my-main-body{
    text-align: right;
    padding: 15px;
  }
  .my-side-nav{
  }
  `]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
