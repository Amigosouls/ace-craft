import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/model/product-model';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  arr:any=[]
 
  cartUrl=environment.cartapi;

  constructor(private httpObj : HttpClient, private userObj: UserService) { }

  //function to post to cartitems(new)
  postToCart(product:ProductModel){
    this.httpObj.post<ProductModel>(this.cartUrl, product).subscribe(
      (response)=>{
        console.log(response)
      }

    )
  }

  //remove product from cart

  deleteFromCart(id:number){
    this.httpObj.delete(this.cartUrl+'/'+id).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

  //increase or decrease quantity of product

  increaseCartQuantity(id:number, product:ProductModel){
    this.httpObj.put<ProductModel>(this.cartUrl+'/'+id,product).subscribe(
   
    )
  }

  getCartItems(){
    
    return this.httpObj.get<ProductModel>(this.cartUrl+'')
    
  }

  //countsubject allows to track change the count of cart items.
  public countSubject = new Subject<number>();

  //fuction returns and sets the count of cartItems
  getCount(){
    return this.getCartItems().subscribe(
      (res) => {
        console.log(this.arr);
        this.arr=res;
        this.countSubject.next(this.arr.length)
      }
    )
  }

}
