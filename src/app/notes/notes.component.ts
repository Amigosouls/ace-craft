import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notesArray : any[] =[]; 

  constructor(private notesObj:NotesService){

  }
  ngOnInit(): void {
    this.notesObj.getNotes().subscribe(
      (response)=>{
        this.notesArray = response
        console.log(response)
      }
    )
  }
}
