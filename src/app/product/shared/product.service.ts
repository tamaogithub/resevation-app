import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  //プロダクト一覧のObservableを登録する
  getProducts(): Observable<any>{
    return this.http.get('/api/v1/products')
  }

  //プロダクト詳細のObservableを登録する
  getProductById(productId: string): Observable<any>{
    return this.http.get('/api/v1/products/' + productId)
  }
}