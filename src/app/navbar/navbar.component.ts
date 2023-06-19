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
          { label: 'SCHOOL' },
          { label: 'COLLEGE' , routerLink:'college'},
          { label: 'ENTERPRISE'},
          { label: 'NOTES',id:"edit" },
          { label: 'AIREN MASK' }
      ];

      this.activeItem = this.items[0];
  }

}
