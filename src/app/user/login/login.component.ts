import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { MessageService } from 'primeng/api';
import { Users } from 'src/model/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  username : FormControl | any;
  password : FormControl | any;
  userList:Users[]=[]
  constructor(private userObj: UserService, private router: Router, private messages: MessageService){
  }



  ngOnInit(): void {
    this.userObj.getUser().subscribe(
      (response)=>{
        this.userList=response
      }
    )
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup(
      {
        username : this.username,
        password : this.password
      }
    )

  }
  redirectPage(){
 
  }

  onSubmission(form:any){
    for (const users of this.userList) {
      if((users.useremail==form.value.username) && (users.confirmpassword==form.value.password)) {
        this.userObj.putUsers(users,users.id);
        //this.router.navigate(['/home'])
        break;
      }
    }
    
  }

}
