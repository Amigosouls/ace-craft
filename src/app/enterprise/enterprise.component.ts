import { Component, OnInit } from '@angular/core';
import { EventItem } from 'src/model/caro-img';
import { ImgserviceService } from 'src/services/imgservice.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
  events:any=[];
  constructor(private imgServices:ImgserviceService){


  }
  ngOnInit(): void {
    this.imgServices.getTimeline().subscribe(
      (response)=>{
        this.events=response;
      }
    )
  }

  

}
