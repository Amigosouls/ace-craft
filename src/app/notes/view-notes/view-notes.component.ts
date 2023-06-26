import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/services/notes-service.service';
@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {
  selectedNotes:any=[]
  
  notesId!:string;
  constructor(private routerobj: ActivatedRoute ,
    private notesObj: NotesService){
  }

  ngOnInit(): void {
    this.notesId = this.routerobj.snapshot.params['id'];
  this.notesObj.getNotesById(this.notesId).subscribe(
      (response)=>{
        this.selectedNotes=response
      }
    )
  }

}
