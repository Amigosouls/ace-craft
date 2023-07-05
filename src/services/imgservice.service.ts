import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaroImg } from '../model/caro-img';
import { EventItem } from '../model/caro-img';
import { Cards } from '../model/caro-img';
@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {

  constructor(private httpClient : HttpClient) { }

  urlString : string = 'http://localhost:3000/Trials'
  timelineString :string = 'http://localhost:3000/Events'
  cardUrl : string="http://localhost:3000/Cards"
  getCarouselImages(){
    return this.httpClient.get<CaroImg[]>(this.urlString)
  }

  getTimeline(){
    return this.httpClient.get<EventItem>(this.timelineString)
  }

  getCards(){
    return this.httpClient.get<Cards>(this.cardUrl)
  }
}

