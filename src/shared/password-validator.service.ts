import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function matchPasswords(password:string, confirmpassword:string) {
  return (formgroup: FormGroup)=>{
    const pass1 = formgroup.controls[password];
    const pass2 = formgroup.controls[confirmpassword];
    if(pass2.errors && !pass2.errors['matchPasswords']){
      return;
    }
    if(pass1.value !== pass2.value){
      pass2.setErrors({matchPasswords:true});
    }
    else
    {
      pass2.setErrors(null);
    }

  }



}
