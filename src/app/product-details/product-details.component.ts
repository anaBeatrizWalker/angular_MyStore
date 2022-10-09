import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Primeiro pega o id do produto atual da rota
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Encontra o produto que corresponde ao id passado na rota
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
