import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ShoppingCartService } from '../../../services/shopping-cart.service';

import { StoreItemData } from '../../../models/store-item-data';

@Component({
  selector: 'my-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.scss']
})
export class ColorItemComponent implements OnInit {
  @Input() data: StoreItemData;
  @ViewChild('addToCartModall') addToCartModal;

  public count: number = 1;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    console.log(this.data.colorRgb);
  }

  quantCanged(item, event) {
    this.count = event;
  }

  onAddToCartClick() {
    this.shoppingCartService.addToCart(this.data, this.count);
    this.addToCartModal.show();
  }

}
