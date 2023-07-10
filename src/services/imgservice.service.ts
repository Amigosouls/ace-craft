// service is used to load images and carousels

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaroImg } from '../model/caro-img';
import { EventItem } from '../model/caro-img';
import { Cards } from '../model/caro-img';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {

  constructor(private httpClient : HttpClient) { }

  urlString =environment.trialsapi
  timelineString=environment.eventsapi
  cardUrl =environment.cardsapi
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

