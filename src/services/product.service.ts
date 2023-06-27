import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = "http://localhost:3000/Products"
  constructor(private httpObj : HttpClient) { }

  getProductsByCategory(category : string){
    return this.httpObj.get<ProductModel[]>(this.productUrl+'?category_like='+category);
  }

}
