import { Injectable } from '@angular/core';
import { Users } from 'src/model/users';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = "http://localhost:3000/Users"
  constructor(private httpObj:HttpClient) {
    

   }

   postUsers(userList : Users){
    userList.logged=false;
    this.httpObj.post<Users>(this.usersUrl,userList).subscribe(
      (response)=>{
        console.log(response);
        
      }
    )
   }

   putUsers(userList:Users,id:number){
    userList.logged=true;
    console.log("hi")
    this.httpObj.put<Users>(this.usersUrl+'/'+id,userList).subscribe(
      (response)=>{
        console.log(response);
      }
    )
   }

   getUser(){
   return this.httpObj.get<Users[]>(this.usersUrl)
   }

}
