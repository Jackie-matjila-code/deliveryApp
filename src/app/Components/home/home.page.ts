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
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

<<<<<<< Updated upstream
productList: Product[] = [];

product = {} as Product;

  constructor(private productService: ProductsService ) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }
=======
<<<<<<< HEAD
  productList: Products[] = [];

  product = {} as Products;
  cartItems = [];
  
    constructor(private productServic: CartService, private productService: ProductsService) { }
  
    ngOnInit() {
       this.productList = this.productService.getProducts();
       this.cartItems = this.productServic.getCart();
    }
  add(){
    this.productServic.addProductToCart(this.product);
    console.log('List', this.productServic.getCart());
  }
=======
productList: Product[] = [];

product = {} as Product;

  constructor(private productService: ProductsService ) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }
>>>>>>> Stashed changes
// add(){
//   this.productService.addToCart(this.product);
//   console.log('List', this.productService.getCart());
// }
<<<<<<< Updated upstream
=======
>>>>>>> b884d01f9173f5df2214ec810945c3d697a32af7
>>>>>>> Stashed changes
}
