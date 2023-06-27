import { Injectable } from '@angular/core';
import { SchoolModel } from 'src/model/school-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpObj : HttpClient) { }
  schoolUrl = "http://localhost:3000/Schools";
  getSchools(){
    return this.httpObj.get<SchoolModel[]>(this.schoolUrl);
  }

}
