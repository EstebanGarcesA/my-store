import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {

  @Input('product') product: Product = {
    id: '',
    name: '',
    image: '',
    price: 0

  }

}
