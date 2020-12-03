import { Products } from './../../models/products';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItems = [];

cartTotal = 0;

  constructor() { }

  addProductToCart(product: Products){
    this.cartItems.push({
      id: product.id,
      title: product.name,
      qty: 1,
      price: product.price
    });
        this.cartTotal = 0;
        this.cartItems.forEach(item =>{
       this.cartTotal += (item.qty * item.price);
     });
  }
  removeItem(product: Products){
  var i = 0;
  while(i < this.cartItems.length){
    if(this.cartItems[i] === product){
      this.cartItems.splice(i, 1);
    }else{
      ++i;
    }
  }
 }
 getCart(){
     return this.cartItems;
   }
}




// getProducts(): Products[]{
//   return this.products;
// }

// addToCart(product){
//   this.products.push(product);
// }

// removeItem(product){
//   var i = 0;
//   while(i < this.products.length){
//     if(this.products[i] === product){
//       this.products.splice(i, 7);
//     }else{
//       ++i;
//     }
//   }
//   return this.products;
// }
// getCart(){
//   return this.products;
// }