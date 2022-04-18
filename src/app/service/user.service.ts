import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Userdata } from "../models/userdata";
import { Logindata } from "../models/userdata";
import { catchError, tap} from "rxjs/operators";
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://localhost:4300/user";
  constructor(
    private http : HttpClient
  ) { }

  doRegister(data : Userdata){
    return this.http.post(`${this.baseurl}/saveuser`,data)
    .pipe(
      // tap(data => {
      //   console.log('All: ', JSON.stringify(data))
      // }),
      catchError(this.handleError)
    );
  }

  doLogin(data : Logindata){
    return this.http.post(`${this.baseurl}/login`,data)
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

  getData()
  {
    let url="http://localhost:4300/user/list";
    return this.http.get(url);
  }

  
  IsLoggedIn()
  {
    return !!localStorage.getItem('token')
      
  };

  getToken()
  {
    return localStorage.getItem('token')
  }
  
}



