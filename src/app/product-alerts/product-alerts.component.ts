import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  //O decorador product indica que o valor da propriedade é passado pelo pai do component
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
