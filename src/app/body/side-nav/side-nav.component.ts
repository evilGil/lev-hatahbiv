import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { SideNavItemData} from './side-nav-item-data';

@Component({
  selector: 'my-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [`
  .list-group-item { padding: 4px 15px 4px 0px; }
  `]
})
export class SideNavComponent implements OnInit {

  public sections: SideNavItemData[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.sections = this.dataService.getSideNavItems();
  }

}
