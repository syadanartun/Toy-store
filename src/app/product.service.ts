import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='http://localhost:9000/product/';
  constructor(private httpClient:HttpClient) { }

  public getAllProducts():Observable<Products[]> {

    return this.httpClient.get<Products[]>(this.url + 'products');
  }
  public getProductId():Observable<Products>{
    return this.httpClient.get<Products>(this.url+'id');
  }
}
