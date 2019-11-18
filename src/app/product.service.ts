import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:63289/api';
  constructor( private http:HttpClient) { }
  getProductList():Observable<any>{
    return this.http.get(this.baseUrl+'/products');
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/products/'+id);
  }
  addProduct(pdt:Product){
    return this.http.post(this.baseUrl+'/products',pdt)
  }
  GetProduct(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/products/'+id)
  }
  UpdateProduct(id:number,product:Product)
  {
    return this.http.put(this.baseUrl+'/products/'+id,product)
  }
}
