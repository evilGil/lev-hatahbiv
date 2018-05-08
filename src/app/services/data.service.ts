import { Injectable } from '@angular/core';

import { HttpDataService } from './http-data.service';

import { StoreItemData } from '../models/store-item-data';
import { SideNavItemData } from '../body/side-nav/side-nav-item-data';
import { ContactMessageData } from '../models/contact-message-data';

@Injectable()
export class DataService {

  constructor(private httpDataService: HttpDataService) { }

  public sendContactMessage(msg: ContactMessageData) {
    return this.httpDataService.sendContactMessage(msg);
  }

  public getSideNavItems() {
    return [new SideNavItemData("צבעים", "",
      [new SideNavItemData("צבעי שמן", "store/colors/oil-colors", [])]),
    new SideNavItemData("מכחולים", "",
      [new SideNavItemData("מכחולי בריסטל", "store/sizes/bristle-brushes", []),
      new SideNavItemData("מכחולים סינטטים", "store/sizes/synthetic-brushes", [])]),
    new SideNavItemData("דבקים", "",
      [new SideNavItemData("סרטי הדבקה", "store/masking-tapes", []),
      new SideNavItemData("דבקים לאומנות", "store/art-glues", []),
      new SideNavItemData("דבקים שונים", "store/general-glues", []),
      new SideNavItemData("אקדחי דבק", "store/glue-guns", [])])
    ];
  }

  public getItemsByName(name: string) {
    return this.httpDataService.getItemsByName(name);
  }

  public getCategoryItems(category: string) {
    return this.httpDataService.getCategoryItems(category);

    // if(category === "colors"){
    // return[new StoreItemData(1,"מוצר 1 לדוגמה", 23.5, "תיאור של מוצר 1, גנן גידל דגן בגן", "images/header-logo.png"),
    //        new StoreItemData(2,"Item-2", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(3,"Item-3", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(4,"Item-4", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(5,"Item-5", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(6,"Item-6", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(7,"Item-7", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(8,"Item-8", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(9,"Item-9", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(10,"Item-10", 23.5, "details for item 3", "images/header-logo.png") ];

    // }
    // else{
    // return[new StoreItemData(1,"מוצר 1 לדוגמה", 23.5, "תיאור של מוצר 1, גנן גידל דגן בגן", "images/header-logo.png"),
    //        new StoreItemData(2,"Item-2", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(3,"Item-3", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(6,"Item-6", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(7,"Item-7", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(8,"Item-8", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(9,"Item-9", 23.5, "details for item 2", "images/header-logo.png"),
    //        new StoreItemData(10,"Item-10", 23.5, "details for item 3", "images/header-logo.png") ];

    // }
  }

}
