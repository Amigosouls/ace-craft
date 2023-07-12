import { Component,OnInit } from '@angular/core';
import { SchoolService } from 'src/services/school.service';

@simpleDecorator

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private schoolObj:SchoolService){
  }
 
  schoolList :any=[];
  ngOnInit(): void {
    this.schoolObj.getSchools().subscribe(
      (response)=>{
        this.schoolList=response;

      }
      
    )
    
   
  }

}
function simpleDecorator(args:any) {
    console.log("hello from decorator");
    Object.defineProperty(args.prototype,'value1',{
      value:100
    })
}
