import { Component } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent {

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
