import { Injectable } from '@angular/core';
import { Users } from 'src/model/users';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId =0

  usersUrl =environment.userapi;
  constructor(private httpObj:HttpClient) {}

   postUsers(userList : Users){
    userList.logged=false;
    this.httpObj.post<Users>(this.usersUrl,userList).subscribe(
      (response)=>{}
    )
   }

   getActiveUser(){
    return this.httpObj.get<Users[]>(this.usersUrl+'?logged_like=true')
   }

   putUsers(userList:Users,id:number,action:string){
   if(action=='login'){
    userList.logged=true;
    this.httpObj.put<Users>(this.usersUrl+'/'+id,userList).subscribe(
      (response)=>{}
    )
   }
   else if(action=='logout'){
    userList.logged=false;
    this.httpObj.put<Users>(this.usersUrl+'/'+id,userList).subscribe(
      (response)=>{}
    )
   }
   }

   getUser(){
   return this.httpObj.get<Users[]>(this.usersUrl)
   }

   public authorisationSubject = new Subject<boolean>();

   validateAuth(data:boolean){
    this.authorisationSubject.next(data);
   }

   value?:boolean;

   getAuthorisationStatus(){
    this.authorisationSubject.subscribe(
      data=>{
        this.value=data;
      }
    );
    return this.value;
   }

}
