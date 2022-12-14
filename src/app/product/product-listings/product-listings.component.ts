import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products:any

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const productsObservable = this.productService.getProducts()
    
    productsObservable.subscribe(
      (data) => {
        this.products = data
        // console.log('次のデータが出力されました：' + JSON.stringify(data) )
        console.log('次のデータが出力されました：' + 'product-listing' + this.products)
      },
      () => { console.log('完了しました') }
    )
  }

}
