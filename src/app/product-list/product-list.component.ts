import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private _productService) { }

  ngOnInit() {
    this._productService.getProduct().subscribe((response) =>
    this.products = response);
  }

}
