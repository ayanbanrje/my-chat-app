import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Logindata } from "../models/userdata";
import { UserService } from "../service/user.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UserModel = new Logindata("ayan@gmail.com","12345");
  dissable = true;
  succMsg = false;
  errMsg = false;

  
  constructor(
    private _userService : UserService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  async doLogin(){
    let self = this;
    this._userService.doLogin(this.UserModel).subscribe({
      next: (data: any) => {
        this.succMsg = data.message;
        self.errMsg = false;
        localStorage.setItem('token',data.token )
        this.router.navigate(['dashboard'])
        
        
      },
      error(error) {
        if (error.error.message) {
          self.errMsg = error.error.message;
        } else {
          self.errMsg = error.statusText;
        }
        self.succMsg = false;
      },
      complete() {
        console.log("Process is done");
        
      },
      
    });

  }



  

  }

