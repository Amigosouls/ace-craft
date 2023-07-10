//service for rendering blog page.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesViewer } from 'src/model/caro-img';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesUrl =environment.notesapi
  constructor(private httpObj:HttpClient) { }

  getNotes(){
    return this.httpObj.get<NotesViewer[]>(this.notesUrl);
  }

  //retrives note by id
  getNotesById(id:string){
    return this.httpObj.get<NotesViewer[]>(this.notesUrl+'?id='+id);
  }

}
