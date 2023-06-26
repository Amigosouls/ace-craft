import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesViewer } from 'src/model/caro-img';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesUrl ="http://localhost:3000/Notes"
  constructor(private httpObj:HttpClient) { }

  getNotes(){
    return this.httpObj.get<NotesViewer[]>(this.notesUrl);
  }
  getNotesById(id:string){
    return this.httpObj.get<NotesViewer[]>(this.notesUrl+'?id='+id);
  }

}
