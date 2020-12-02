import { ProductsService } from './../../Services/products/products.service';
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

  constructor(private productService: ProductsService ) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }
// add(){
//   this.productService.addToCart(this.product);
//   console.log('List', this.productService.getCart());
// }
}
