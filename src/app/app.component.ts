import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ace-craft';

  items: MenuItem[] |any;

  activeItem: MenuItem | any;

  ngOnInit() {
      this.items = [
          { label: 'SCHOOL' },
          { label: 'COLLEGE' },
          { label: 'ENTERPRISE'},
          { label: 'NOTES',id:"edit" },
          { label: 'AIREN MASK' }
      ];

      this.activeItem = this.items[0];
  }
  
}
