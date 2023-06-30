import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/model/product-model';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cartUrl="http://localhost:3000/Cart";

  constructor(private httpObj : HttpClient, private userObj: UserService) { }

  postToCart(product:ProductModel){
    this.httpObj.post<ProductModel>(this.cartUrl, product).subscribe(
      (response)=>{
        console.log(response)
      }

    )
  }



  getCartItems(){
    
    return this.httpObj.get<ProductModel>(this.cartUrl+'')
    
  }

}
