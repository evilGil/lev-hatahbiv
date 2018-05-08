import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.scss']
})
export class AddToCartModalComponent implements OnInit {
  @ViewChild('addToCartModal') addToCartModal;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public show() {
    this.addToCartModal.show();
  }

  public goToCart() {
    this.router.navigate(['my-cart']);
  }

}
