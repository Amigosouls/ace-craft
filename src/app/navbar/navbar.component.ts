import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from 'src/services/cart.service';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private cartObj: CartService,
    private userService: UserService,
    private routerObj: Router,
    private messages:MessageService
  ) {
    // this.userService.getActiveUser().subscribe(
    //   (response)=>{
    //     this.userValid = response[0].logged
    //     this.activeUser=response
    //   }
    // )
  }

  items: MenuItem[] | any;
  cartList: any = [];
  activeUser: any = [];
  cartCount: number = 0;
  userValid: any = true;
  activeItem: MenuItem | any;
  idValue = '';
  ngOnInit() {
    this.items = [
      { label: 'SCHOOL', routerLink: 'school' },
      { label: 'COLLEGE', routerLink: 'college' },
      { label: 'ENTERPRISE', routerLink: 'enterprise' },
      { label: 'NOTES', id: 'edit', routerLink: 'notes' },
      { label: 'AIREN MASK', routerLink: 'airen-mask' },
    ];

    this.activeItem = this.items[0];
    this.cartObj.countSubject.subscribe((response) => {
      console.log(response);
      this.cartCount = response;
    });
    this.cartObj.getCartItems().subscribe((response) => {
      this.cartList = response;
      this.cartCount = this.cartList.length;
      console.log(this.cartCount);
    });
    this.userService.authorisationSubject.subscribe((data) => {
      console.log(data);
      this.userValid = data;
    });
    console.log(this.userValid);
  }

  logout() {
    this.userValid = false;
    this.userService.putUsers(
      this.activeUser[0],
      this.activeUser[0].id,
      'logout'
    );
    this.messages.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
    this.userService.validateAuth(true);
    setTimeout( ()=>{this.routerObj.navigate(['users/'])},2000)
  }
  setId(id: string) {
    this.idValue = id;
  }
}
