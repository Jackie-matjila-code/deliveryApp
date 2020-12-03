<<<<<<< Updated upstream
import { ProductsService } from './../../Services/products/products.service';
=======
<<<<<<< HEAD
import { ProductsService } from './../../services/products/products.service';
import { CartService } from './../../services/cart/cart.service';
import { Products } from './../../models/products';
=======
import { ProductsService } from './../../Services/products/products.service';
>>>>>>> b884d01f9173f5df2214ec810945c3d697a32af7
>>>>>>> Stashed changes
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
<<<<<<< Updated upstream
  product = [];
  count;
  constructor(private productService :ProductsService) { }

  ngOnInit() {
    // this.product = this.productService.getCart();
    // this.count = this.product.length;
=======
<<<<<<< HEAD

  product = {} as Products;
  cartItems = [];

  constructor(private productServic: CartService,private productService: ProductsService) { }

  ngOnInit() {
    this.cartItems = this.productServic.getCart();
>>>>>>> Stashed changes
  }
  add(){
    this.productServic.addProductToCart(this.product);
    console.log('List', this.productServic.getCart());
=======
  product = [];
  count;
  constructor(private productService :ProductsService) { }

  ngOnInit() {
    // this.product = this.productService.getCart();
    // this.count = this.product.length;
>>>>>>> b884d01f9173f5df2214ec810945c3d697a32af7
  }
}
