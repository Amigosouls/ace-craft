import { CanActivateFn, CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
export class loginAuthGuard implements CanActivate{
 isAuthenticated:boolean=false;
 constructor(private userObj:UserService, private routerObj : Router){
 }

 canActivate():
 |Observable<boolean | UrlTree>
 |Promise<boolean|UrlTree>
 |boolean
 |UrlTree{
  var isAuth = this.userObj.authorisationSubject.subscribe(
    (data)=>{
      this.isAuthenticated=data;
      console.log(data);
    }
  )
  if(this.isAuthenticated==false){
    this.routerObj.navigate(["/login"])
    return false;
  }
  else{
    return true;
  }
 }

};
