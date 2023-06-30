import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { ProductModel } from 'src/model/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList :any=[];
  cartCount=0;
  productQuantity=0
  cartData:any=[]
  constructor(private cartObj: CartService){

  }
 

  ngOnInit(): void {
    this.cartObj.getCartItems().subscribe(
      (response)=>{
        this.cartList = response;
        this.cartCount= this.cartList.length;
      }
    )
  }
  cartTotal(productList:any):number{
    var x :number=0;
    for (const product of productList) {
      x=x+(product.sell_price*product.quantity);
    }
    return x
  }

  increeCount(product:any){
    console.log(product.quantity)
    product.quantity=parseInt(product.quantity)+1
    this.cartObj.increaseCartQuantity(product.id,product)
    this.ngOnInit();
    this.cartTotal(product)
  }

  decreeCount(product:any){
    product.quantity=parseInt(product.quantity)-1
    this.cartObj.increaseCartQuantity(product.id,product);
    this.ngOnInit();
    this.cartTotal(product)
  }

  deleteCart(id:number){
    this.cartObj.deleteFromCart(id);
    alert("item deleted successfully");
    this.ngOnInit();
  }
}
