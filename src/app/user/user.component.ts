import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private actRoute : ActivatedRoute, private router : Router  ){

  }
  idParam =""


ngOnInit(): void {
  this.idParam=this.actRoute.snapshot.params['id'];
}
}
