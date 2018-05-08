import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'my-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {

  public shoppingCartDataChangedSubscription: any;
  public sum: number = 0;
  public items = new Array();
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getShoppingCart();
    this.sum = this.shoppingCartService.getSum();
    window.scrollTo(0, 0);
    this.shoppingCartDataChangedSubscription = this.shoppingCartService.
      shoppingCartDatachange.subscribe(shoppingCartData => this.sum = shoppingCartData.sum);
  }

  public onBuyClick() {
    console.log("buy!!");

  }

  public quantCanged(item, count) {
    this.shoppingCartService.setCartItem(item.item, count);
    this.items = this.shoppingCartService.getShoppingCart();
    this.sum = this.shoppingCartService.getSum();
  }
}


