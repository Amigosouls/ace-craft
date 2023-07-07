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

  postToCart(product:ProductModel){
    this.httpObj.post<ProductModel>(this.cartUrl, product).subscribe(
      (response)=>{
        console.log(response)
      }

    )
  }

  deleteFromCart(id:number){
    this.httpObj.delete(this.cartUrl+'/'+id).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

  increaseCartQuantity(id:number, product:ProductModel){
    this.httpObj.put<ProductModel>(this.cartUrl+'/'+id,product).subscribe(
   
    )
  }

  getCartItems(){
    
    return this.httpObj.get<ProductModel>(this.cartUrl+'')
    
  }

  public countSubject = new Subject<number>();

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
