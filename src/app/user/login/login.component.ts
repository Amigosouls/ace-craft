import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { MessageService } from 'primeng/api';
import { Users } from 'src/model/users';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;
  loginForm!: FormGroup;
  username: FormControl | any;
  password: FormControl | any;
  userList: Users[] = [];
  usersUrl = environment.userapi;

  constructor(
    private userObj: UserService,
    private router: Router,
    private messages: MessageService
  ) {}

  ngOnInit(): void {


    this.userObj.getUser().subscribe((response) => {
      this.userList = response;
    });
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }
  onSubmission(form: any) {
    for (const users of this.userList) {
      if (
        users.useremail == form.value.username &&
        users.confirmpassword == form.value.password
      ) {
        this.userObj.putUsers(users, users.id,'login');
        this.isLogged = true;
        this.messages.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
        this.userObj.validateAuth(true);
        setTimeout( ()=>{this.router.navigate(['/home'])},2000)
        break;
      }
      if (!this.isLogged) {
        alert('No user found with this email or password');
        this.userObj.validateAuth(false);
      }
    }
  }
}
