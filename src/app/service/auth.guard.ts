import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private _userService: UserService,
    private _router: Router

  ){}
  
  canActivate(): boolean {
    if(this._userService.IsLoggedIn()) {
      return true
    }else {
      this._router.navigate(['/login'])
      return false
    }

  }
    
  
}
  

