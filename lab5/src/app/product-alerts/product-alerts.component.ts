import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-alerst',
  templateUrl: './product-alerst.component.html',
  styleUrls: ['./product-alerst.component.css']
})
export class ProductAlerstComponent implements OnInit {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const productCategory = String(routeParams.get('categoryName'));
    //console.log(productIdFromRoute)
    //console.log(productCategory)
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute && product.categoryName === productCategory);
  }
}
