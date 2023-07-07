import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/model/product-model';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl =environment.productsapi
  constructor(private httpObj : HttpClient) { }

  getProductsByCategory(category : string){
    return this.httpObj.get<ProductModel[]>(this.productUrl+'?category_like='+category);
  }

  getProductsById(id:string){
    return this.httpObj.get<ProductModel[]>(this.productUrl+'?id='+id)
  }

}
