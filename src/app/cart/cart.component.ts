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
  constructor(private cartObj: CartService){

  }

  ngOnInit(): void {
    this.cartObj.getCartItems().subscribe(
      (response)=>{
        this.cartList = response;
        this.cartCount= this.cartList.length
      }
    )
  }
}
