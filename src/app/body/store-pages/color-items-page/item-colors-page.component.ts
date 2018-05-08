import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { DataService } from '../../../services/data.service';

import { StoreItemData } from '../../../models/store-item-data';


@Component({
  selector: 'my-item-colors-page',
  templateUrl: './item-colors-page.component.html',
  styleUrls: ['./item-colors-page.component.scss']
})
export class ItemColorsPageComponent implements OnInit, OnDestroy {
  private itemSubscription: Subscription;
  public spinnerOn: boolean;
  public items: StoreItemData[] = new Array;
  public itemName: string;
  public image: string;


  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute) {
    this.itemSubscription = activatedRoute.params.subscribe((params: any) => this.changeItem(params));
    this.spinnerOn = true;

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }

  public changeItem(params) {
    this.itemName = params['item-name'];
    this.items = [];
    this.spinnerOn = true;
    window.scrollTo(0, 0);
    this.dataService.getItemsByName(this.itemName).subscribe(
      (data: any) => {
        this.spinnerOn = false;
        this.items = Object.keys(data).map(function (key) { return data[key]; });
        this.image = this.items[0].image;
      }
    );
  }

}
