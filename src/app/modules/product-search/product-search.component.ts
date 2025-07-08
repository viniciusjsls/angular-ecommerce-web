import { Component } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-search',
  imports: [],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
  providers: [ProductsService]
})
export class ProductSearchComponent {
}
