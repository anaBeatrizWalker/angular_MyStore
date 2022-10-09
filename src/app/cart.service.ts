import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Armazena a matriz dos produtos atuais no carrinho
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  //Método que utiliza o método get() de HttpClient para obter os dados de shipping.json
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
