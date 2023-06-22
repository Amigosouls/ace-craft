import { Component } from '@angular/core';
import * as jsonNotes from 'src/assets/json/notes.json'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes = jsonNotes;

}

interface Notes{
  id:number;
  description : string
}