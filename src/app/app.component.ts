import { Component,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
//import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent{
  title = 'ace-craft';
}
