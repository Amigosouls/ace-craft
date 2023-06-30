import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from 'src/services/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cartObj: CartService){}

  items: MenuItem[] |any;
  cartList :any=[]
  cartCount:number=0

  activeItem: MenuItem | any;

  ngOnInit() {
      this.items = [
          { label: 'SCHOOL', routerLink:'school' },
          { label: 'COLLEGE' , routerLink:'college'},
          { label: 'ENTERPRISE', routerLink:'enterprise'},
          { label: 'NOTES',id:"edit", routerLink:'notes' },
          { label: 'AIREN MASK', routerLink:'airen-mask' }
      ];

      this.activeItem = this.items[0];
      this.cartObj.countSubject.subscribe(
        (response)=>{
          console.log(response)
          this.cartCount = response;
        }
      )
      this.cartObj.getCartItems().subscribe(
        (response)=>{
          this.cartList=response
          this.cartCount=this.cartList.length;
          console.log(this.cartCount)
        }
      )

  }
  setId(id:string){
    this.idValue=id
  }

  idValue=""

}
