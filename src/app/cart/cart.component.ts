import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { ProductModel } from 'src/model/product-model';
import { MessageService } from 'primeng/api';

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
  paymentHandler: any = null;
  constructor(private cartObj: CartService, private message:MessageService){

  }
 

  ngOnInit(): void {
    this.cartObj.getCartItems().subscribe(
      (response)=>{
        this.cartList = response;
        this.cartCount= this.cartList.length;
      }
    )
    this.invokeStripe();
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
  makePayment(total:number){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NPh8ySDFOCXn2pRGvfJDxjJefO7gJFHRT7tdp1vrLA7Pt3TGPzuIZvxjihpLhX7ffkoxaxzw4eANBaPnI7OqzTc00kVPKOsDF',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
      }
  })
  this.message.add({ severity: 'success', summary: 'Success', detail: 'Order Placed Successfully' });
  paymentHandler.open({
    name: 'Course',
    description: 'Order Details',
    amount: total,
  });

  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NPh8ySDFOCXn2pRGvfJDxjJefO7gJFHRT7tdp1vrLA7Pt3TGPzuIZvxjihpLhX7ffkoxaxzw4eANBaPnI7OqzTc00kVPKOsDF',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            this.message.add({ severity: 'danger', summary: 'Success', detail: "Coudn't generate payment details " });
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }



}
