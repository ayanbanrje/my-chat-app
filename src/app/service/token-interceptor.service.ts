import { Injectable, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let userService = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}