import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from 'src/services/imgservice.service';


@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  constructor(private ImageService : ImgserviceService){

  }

  trialCarousel:any[]=[]

ngOnInit(): void {
  this.ImageService.getCarouselImages().subscribe(
    (response) =>{
      this.trialCarousel = response
    }
  )

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

