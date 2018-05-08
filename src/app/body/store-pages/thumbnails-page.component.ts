import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { DataService } from '../../services/data.service';

import { StoreItemData } from '../../models/store-item-data';

@Component({
  selector: 'my-thumbnails-page',
  templateUrl: './thumbnails-page.component.html',
  styleUrls: ['thumbnails-page.component.scss']
})
export class ThumbnailsPageComponent implements OnInit, OnDestroy {
  private categorySubscription: Subscription;

  @ViewChild('itemModal') itemModal;
  @ViewChild('addToCartModal') addToCartModal;

  category: string;
  public returnedItems: StoreItemData[] = [];
  public items: StoreItemData[] = [];
  public itemsPerPage: number = 12;
  public modalItem: StoreItemData;
  public itemModalVisible: boolean;
  public windowWidth: number = window.innerWidth;
  public spinnerOn: boolean;
  public page: number;

  constructor(private shoppingCartService: ShoppingCartService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.modalItem = new StoreItemData(0, "", 0, "", "", 0, false, "", "", "");
    this.itemModalVisible = false;
    this.categorySubscription = activatedRoute.params.subscribe((params: any) => this.changeParams(params));
    this.spinnerOn = true;
    this.page = 1;
  }

  ngOnInit() {
  }

  // public getItems():StoreItemData[] {
  // }

  public openItemModal(itemData) {
    this.modalItem = itemData;
    this.itemModal.show();
  }

  public addButtonClick(data: StoreItemData) {
    this.shoppingCartService.addToCart(data, 1);
    this.itemModal.hide();
    this.addToCartModal.show();
  }

  public changeParams(params) {
    this.category = params['category'];
    this.items = [];
    this.spinnerOn = true;
    window.scrollTo(0, 0);
    this.dataService.getCategoryItems(this.category).subscribe(
      (data: any) => {
        this.spinnerOn = false;
        this.page = 1;
        this.items = Object.keys(data).map(function (key) { return data[key]; });
        this.returnedItems = this.items.slice(0, this.itemsPerPage);
      }
    );
  }

  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();

  }

  onPageChange(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedItems = this.items.slice(startItem, endItem);
    window.scrollTo(0, 0);
  }
  openAddToCartModal(modal) {
    modal.show();
  }

}
