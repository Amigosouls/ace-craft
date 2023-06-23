import { Component, OnInit } from '@angular/core';
import * as trialsData from 'src/assets/json/trials.json';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  trialCarousel: Trials[] = [];

ngOnInit(): void {
  for (const obj of trialsData) {
    console.log(JSON.stringify(obj))
  }
}

constructor(){
  console.log(trialsData)
}

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

}

interface Trials {
  id:number,
  imgUrl:string,
  
}