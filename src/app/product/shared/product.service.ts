import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  //プロダクト一覧のObserverを受け取る
  getProducts(): Observable<any>{
    return this.http.get('/api/v1/products')
  }

  //プロダクト詳細のObserverを受け取る
  getProductById(productId: string): Observable<any>{
    return this.http.get('/api/v1/products/' + productId)
  }
}