import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { DataService } from '../../../services/data.service';

import { StoreItemData } from '../../../models/store-item-data';

@Component({
  selector: 'my-size-items-page',
  templateUrl: './size-items-page.component.html',
  styleUrls: ['./size-items-page.component.scss']
})
export class SizeItemsPageComponent implements OnInit {

  private categorySubscription: Subscription;
  public spinnerOn: boolean;
  public page: number;
  public category: string;
  public items: StoreItemData[] = [];
  public groupsMap = new Map();
  public groupsArr = new Array();

  constructor(private shoppingCartService: ShoppingCartService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {
    this.categorySubscription = activatedRoute.params.subscribe((params: any) => this.changeParams(params));
    this.spinnerOn = true;
    this.page = 1;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();

  }

  public changeParams(params) {
    this.category = params['category'];
    this.items = [];
    this.groupsArr = [];
    this.spinnerOn = true;
    window.scrollTo(0, 0);
    this.dataService.getCategoryItems(this.category).subscribe(
      (data: any) => {
        this.spinnerOn = false;
        this.page = 1;
        this.items = Object.keys(data).map(function (key) { return data[key]; });
        this.buildCategoriesItems(this.items)
      }
    );
  }

  FindUnique(items: StoreItemData[]) {
    let arr = [];
    for (var i = 0; i < items.length; i++) {
      if (arr.indexOf(items[i].name) == -1) {
        arr.push(items[i].name);
      }
    }
    return arr;
  }

  buildCategoriesItems(list: StoreItemData[]) {
    for (let uniqueItem of this.FindUnique(list)) {
      let arr = new Array();
      for (let item of list) {
        if (item.name === uniqueItem)
          arr.push(item);
      }
      this.groupsArr.push(arr);
    }
    console.log(this.groupsArr);
  }

}
