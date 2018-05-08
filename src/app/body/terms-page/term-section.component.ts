import { Component, OnInit, Input } from '@angular/core';

import { TermSectionData } from './term-section-data';

@Component({
  selector: 'my-term-section',
  template: `
    <div class="row term-section">
      <div class="col-md-9 term-data">
        <ul class="clear-list">
          <li *ngFor="let dataa of termData.data">
            <p>{{dataa}}</p>
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5><b>{{termData.header}}</b></h5>
      </div>
    </div>
  `,
  styles: [`
  .clear-list{list-style: none;}
  .term-section{ margin-bottom:20px;}
  .term-header{}
  .term-data{ padding: 0 30px;}
  p{margin: 0px;}
  `]
})
export class TermSectionComponent implements OnInit {

  @Input() termData:TermSectionData;

  constructor() { }

  ngOnInit() {
  }

}
