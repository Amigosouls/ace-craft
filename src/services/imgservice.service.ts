import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaroImg } from '../model/caro-img';
import { EventItem } from '../model/caro-img';
@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {

  constructor(private httpClient : HttpClient) { }

  urlString : string = 'http://localhost:3000/Trials'
  timelineString :string = 'http://localhost:3000/Events'
  getCarouselImages(){
    return this.httpClient.get<CaroImg[]>(this.urlString)
  }

  getTimeline(){
    return this.httpClient.get<EventItem>(this.timelineString)
  }
}

