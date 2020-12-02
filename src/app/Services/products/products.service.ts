import { Product } from './../../models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: Product[] = [
    new Product(1, 'Product 1', 4500),
    new Product(2, 'Product 2', 4500),
    new Product(3, 'Product 3', 4500),
    new Product(4, 'Product 4', 4500),
    new Product(5, 'Product 5', 4500),
    new Product(6, 'Product 6', 4500),
    new Product(7, 'Product 7', 4500),
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
}
