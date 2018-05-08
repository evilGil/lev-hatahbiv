import { Component, OnInit, Input } from '@angular/core';

import {ClassBanerInfo} from '../class-banner-info';

@Component({
  selector: 'my-class-banner',
  templateUrl: './class-banner.component.html',
  styles: [`
  .class-banner{ clear: both; }
  .main-info{ float: right;}
  .images img{ width: 50%;}
  .images{}
  .bullets{ 
    clear: both; 
    padding-right: 30px;
  }`]
})
export class ClassBannerComponent implements OnInit {
 @Input() classInfo:ClassBanerInfo;
  constructor() { }

  ngOnInit() {
  }

}
