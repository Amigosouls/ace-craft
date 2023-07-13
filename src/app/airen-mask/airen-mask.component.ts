import { Component, OnInit } from '@angular/core';
import { AirenMaskService } from 'src/services/airen-mask.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedCardsList } from './airenmask-resolve-items.modal';
import { Cards } from 'src/model/caro-img';
@Component({
  selector: 'app-airen-mask',
  templateUrl: './airen-mask.component.html',
  styleUrls: ['./airen-mask.component.css']
})
export class AirenMaskComponent implements OnInit {

  cards : Cards[]=[]
  error?:string;
  

  constructor(private airenObj : AirenMaskService, private route:ActivatedRoute ){
    const resolvedCardList : ResolvedCardsList=this.route.snapshot.data['cardList'] ;
    if(resolvedCardList.error == null){
      this.cards = resolvedCardList.cardList;
      console.log(this.cards);
    }
    else{
      this.error=resolvedCardList.error
      
    }


  }
  ngOnInit(): void {
    this.airenObj.getCardImages().subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

}
