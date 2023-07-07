import { Injectable } from '@angular/core';
import { SchoolModel } from 'src/model/school-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpObj : HttpClient) { }
  schoolUrl =environment.schoolsapi
  getSchools(){
    return this.httpObj.get<SchoolModel[]>(this.schoolUrl);
  }

}
