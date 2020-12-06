import { ProductsService } from './../../services/products/products.service';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  productList: Product[] = [];

  product = {} as Product;
  cartItems = [];
  
    constructor( private productService: ProductsService, private msg: CartService) { }
  
    ngOnInit() {
       this.productList = this.productService.getProducts();
      //  this.cartItems = this.productService.getCart();
    }
  add(){
    // this.productService.addProductToCart(this.product);

    this.msg.sendMsg(this.product);
     console.log(this.product);
  }

}
