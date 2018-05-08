import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  template: `
    <div id="my-footer">
      <div class="">לב התחביב - המנוף 6, רחובות 08-9315213</div>
      <div class="my-line-brake"></div>
    </div>
  `,
  styles: [`
    #my-footer{
      margin-bottom: 12px; 
      clear: both;
    }
`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
