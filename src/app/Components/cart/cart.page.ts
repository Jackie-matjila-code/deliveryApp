import { ProductsService } from './../../Services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  product = [];
  count;
  constructor(private productService :ProductsService) { }

  ngOnInit() {
    // this.product = this.productService.getCart();
    // this.count = this.product.length;
  }

}
