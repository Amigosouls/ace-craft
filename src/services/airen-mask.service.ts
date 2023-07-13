import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cards } from 'src/model/caro-img';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { Card } from 'primeng/card';
import { Inject } from '@angular/core';
import { ResolveFn,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AirenMaskService {

  constructor(private httpClient: HttpClient) { }

  getCardImages(){
   return this.httpClient.get<Cards[]>("https://acecraft-db-x0lx.onrender.com/Cards1").
    pipe(catchError(this.errorHandler) )
  }

  private errorHandler(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.log('client error', errorResponse.error.message);
    }
    else{
      console.log('Server side error',errorResponse);
    }

    return throwError("Requested resource is not found")
  }
  
}
