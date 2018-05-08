import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { StoreItemData } from '../../../models/store-item-data';

@Component({
  selector: 'my-item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.scss']
})
export class ItemThumbnailComponent implements OnInit {
  finalPrice: string;

  @Output() clicked = new EventEmitter();
  @Output() addToCartclicked = new EventEmitter();
  @Input() data: StoreItemData;


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    var finalPrice = (this.data.price * ((100 - this.data.onSale) / 100));
    this.finalPrice = finalPrice.toLocaleString('he-IL', { style: 'currency', currency: 'NIS' });
  }

  public addButtonClick(data: StoreItemData, event) {
    this.shoppingCartService.addToCart(data, 1);
    event.stopPropagation();
    this.addToCartclicked.emit();
  }

  public onClick() {
    this.clicked.emit(this.data);
  }

}
