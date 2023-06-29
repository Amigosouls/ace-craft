import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userObj :UserService ){

  }
  


  signupform !: FormGroup;
  firstname : FormControl | any;
  lastname : FormControl | any;
  useremail : FormControl | any;
  confirmpassword : FormControl | any;
  companytype : FormControl | any;
  dealershipname : FormControl | any;
  dealershipcode : FormControl | any;
  city : FormControl | any;
  state : FormControl | any;
  gstnumber : FormControl | any;
  

  onSubmission(form:any){
    console.log(form.value)
    this.userObj.postUsers(form.value)
  }

  ngOnInit(): void {
    this.firstname = new FormControl('', [Validators.required]);
    this.lastname = new FormControl('', [Validators.required]);
    this.useremail = new FormControl('', [Validators.required]);
    this.confirmpassword = new FormControl('', [Validators.required]);
    this.companytype = new FormControl('', [Validators.required]);
    this.dealershipname = new FormControl('', [Validators.required]);
    this.dealershipcode = new FormControl('', [Validators.required]);
    this.city = new FormControl('', [Validators.required]);
    this.state = new FormControl('', [Validators.required]);
    this.gstnumber = new FormControl('', [Validators.required]);
    this.signupform = new FormGroup(
      {
        firstname : this.firstname,
        lastname : this.lastname,
        useremail: this.useremail,
        confirmpassword : this.confirmpassword,
        companytype : this.companytype,
        dealershipname : this.dealershipname,
        dealershipcode : this.dealershipcode,
        city : this.city,
        state : this.city,
        gstnumber : this.gstnumber
      }
    )
  }

}
