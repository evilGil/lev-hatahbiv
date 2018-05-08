import { Injectable, EventEmitter } from '@angular/core';

import { StoreItemData } from '../models/store-item-data';
import { ShoppingCartItem, ShoppingCartData } from '../models/shopping-cart-models';

@Injectable()
export class ShoppingCartService {
  private shoppingCartData: ShoppingCartData;
  private shoppingCart = {};

  public shoppingCartDatachange: EventEmitter<ShoppingCartData> = new EventEmitter<ShoppingCartData>();

  constructor() {
    this.shoppingCartData = new ShoppingCartData(0, 0);
  }

  public getShoppingCartData(): ShoppingCartData {
    return this.shoppingCartData;
  }
  public getItemsCount() {
    return this.shoppingCartData.itemsCount;
  }

  private updateShopingCartData() {
    let sum: number = 0;
    let count: number = 0;
    for (var key in this.shoppingCart) {
      sum += (this.shoppingCart[key].item.price * this.shoppingCart[key].count);
      count += this.shoppingCart[key].count;
      this.shoppingCartData.itemsCount = count;
      this.shoppingCartData.sum = sum;
      this.shoppingCartDatachange.emit(this.shoppingCartData);
    }
  }

  public setCartItem(item: StoreItemData, count: number) {
    let key = this.getItemKey(item);
    this.shoppingCart[key] = new ShoppingCartItem(item, count);
    this.updateShopingCartData();
  }

  public addToCart(item: StoreItemData, count: number) {
    var key = this.getItemKey(item);
    if (key in this.shoppingCart) {
      this.shoppingCart[key].count = this.shoppingCart[key].count + count;
    }
    else {
      this.shoppingCart[key] = new ShoppingCartItem(item, count);
    }
    this.shoppingCartData.itemsCount += count;
    this.shoppingCartData.sum += (item.price * count);
    this.shoppingCartDatachange.emit(this.shoppingCartData);
  }

  public getItemKey(item: StoreItemData): number {
    return item.id;
  }
  public getShoppingCart() {
    var arr = Object.keys(this.shoppingCart);
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      res.push(this.shoppingCart[arr[i]]);
    }
    return res;
  }

  public getSum(): number {
    return this.shoppingCartData.sum;
  }
}
