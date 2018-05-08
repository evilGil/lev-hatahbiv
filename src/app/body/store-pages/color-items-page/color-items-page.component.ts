import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { DataService } from '../../../services/data.service';

import { StoreItemData } from '../../../models/store-item-data';

@Component({
  selector: 'my-color-items-page',
  templateUrl: './color-items-page.component.html',
  styleUrls: ['./color-items-page.component.scss']
})
export class ColorItemsPageComponent implements OnInit, OnDestroy {
  private categorySubscription: Subscription;
  public spinnerOn: boolean;
  public category: string;
  public items: StoreItemData[] = new Array;
  public windowWidth: number = window.innerWidth;

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.categorySubscription = activatedRoute.params.subscribe((params: any) => this.changeParams(params));
    this.spinnerOn = true;

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

  public changeParams(params) {
    this.category = params['category'];
    this.items = [];
    this.spinnerOn = true;
    window.scrollTo(0, 0);
    this.dataService.getCategoryItems(this.category).subscribe(
      (data: any) => {
        this.spinnerOn = false;
        let allItems = Object.keys(data).map(function (key) { return data[key]; });
        this.buildCategoriesItems(allItems)
      }
    );
  }

  buildCategoriesItems(list: StoreItemData[]) {
    var flags = [];
    for (var i = 0; i < list.length; i++) {
      if (flags.indexOf(list[i].name) == -1) {
        this.items.push(list[i]);
        flags.push(list[i].name);
      }
    }
  }

  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  openItemColorsPage(item: StoreItemData) {
    this.router.navigate(['store', 'colors', 'item', item.name]);
  }

}
