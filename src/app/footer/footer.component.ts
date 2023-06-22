import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    
  items: MenuItem[] |any;

  activeItem: MenuItem | any;

  ngOnInit() {
      this.items = [
          { label: 'ABOUT' },
          { label: 'CARE'},
          { label: 'RETURNS'},
          { label: 'PRODUCTION'},
          { label: 'TERMS' },
          { label: 'GET HELP' }
      ];

      this.activeItem = this.items[0];
  }


}
