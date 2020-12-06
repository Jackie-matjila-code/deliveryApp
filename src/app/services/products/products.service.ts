import { Product } from './../../models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartItems = [];
  cartTotal = 0;

  constructor() { }

  products: Product[] = [
    new Product(1, 'Dell', 4500),
    new Product(2, 'Acer', 5500),
    new Product(3, 'Hp', 6500),
    new Product(4, 'Lenovo', 3500),
    new Product(5, 'Product 5', 7500),
    new Product(6, 'Product 6', 8500),
    new Product(7, 'Product 7', 9500),
  ]

  getProducts(): Product[]{
    return this.products;
  }
  

  // addToCart(product){
  //   this.products.push(product);
  // }

  // removeItem(product){
  //   var i = 0;
  //   while(i < this.products.length){
  //     if(this.products[i] === product){
  //       this.products.splice(i, 1);
  //     }else{
  //       ++i;
  //     }
  //   }
  //   return this.products;
  // }
  // getCart(){
  //   return this.products;
  // }
//   addProductToCart(product: Product){
//     this.cartItems.push({
//       id: product.id,
//       name: product.name,
//       qty: 1,
//       price: product.price
//     });
//         this.cartTotal = 0;
//         this.cartItems.forEach(item =>{
//        this.cartTotal += (item.qty * item.price);
//      });
//   }
//   removeItem(product: Product){
//   var i = 0;
//   while(i < this.cartItems.length){
//     if(this.cartItems[i] === product){
//       this.cartItems.splice(i, 1);
//     }else{
//       ++i;
//     }
//   }
//  }
//  getCart(){
//      return this.cartItems;
//    }
}
