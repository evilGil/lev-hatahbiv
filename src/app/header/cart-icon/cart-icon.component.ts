import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingCartService } from '../../services/shopping-cart.service';

import { ShoppingCartData } from '../../models/shopping-cart-models';

@Component({
  selector: 'my-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  shoppingCartDataChangedSubscription: any;
  shoppingCartData: ShoppingCartData;

  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router) { }

  ngOnInit() {
    this.shoppingCartDataChangedSubscription = this.shoppingCartService.
      shoppingCartDatachange.subscribe(shoppingCartData => this.shoppingCartData = shoppingCartData);
    this.shoppingCartData = this.shoppingCartService.getShoppingCartData();
  }

  public onClick() {
    this.router.navigate(['my-cart']);
  }
}
