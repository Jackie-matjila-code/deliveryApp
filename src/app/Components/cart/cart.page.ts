import { Product } from './../../models/product';
import { ProductsService } from './../../services/products/products.service';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  product = {} as Product;
  cartItems = [
    // {id: 1, productId:1, name: 'Test1', qty:4, price: 25},
    // {id: 2, productId:2, name: 'Test2', qty:4, price: 25},
    // {id: 3, productId:3, name: 'Test3', qty:4, price: 25},
    // {id: 4, productId:4, name: 'Test4', qty:4, price: 25},
  ];
  
  cartTotal = 0;
  count;
  constructor(private msg: CartService, private productService: ProductsService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) =>{
    
      this.addProductToCart(product);

      });
    
   
  }

    addProductToCart(product: Product){
    this.cartItems.push({
      id: product.id,
      name: product.name,
      qty: 1,
      price: product.price
    });
        this.cartTotal = 0;
        this.cartItems.forEach(item =>{
       this.cartTotal += (item.qty * item.price);
     });
  }


}
