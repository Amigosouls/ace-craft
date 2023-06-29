import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  items: MenuItem[] |any;

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
  }
  setId(id:string){
    this.idValue=id
  }

  idValue=""

}
