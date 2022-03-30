import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Userdata } from "../models/userdata";
import { catchError, tap} from "rxjs/operators";
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:4300/user";
  constructor(
    private http : HttpClient
  ) { }

  doRegister(data : Userdata){
    return this.http.post(`${this.baseUrl}/saveuser`,data)
    .pipe(
      // tap(data => {
      //   console.log('All: ', JSON.stringify(data))
      // }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    // just a test ... more could would go here
    return throwError(() => err);
  }

}
