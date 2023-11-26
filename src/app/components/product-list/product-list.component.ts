import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('P01', 'Lamborghini'),
    new Product('P02', "Car")
  ]

  constructor() { }

  ngOnInit() {
  }

}
