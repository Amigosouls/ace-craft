import { Component,OnInit } from '@angular/core';
import { SchoolService } from 'src/services/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private schoolObj:SchoolService){

  }
  num=0
  
  schoolList :any=[]
  ngOnInit(): void {
    this.schoolObj.getSchools().subscribe(
      (response)=>{
        this.schoolList=response;

      }
      
    )
    
   
  }

}
