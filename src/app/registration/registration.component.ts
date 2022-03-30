import { Component, OnInit } from '@angular/core';
import { Userdata } from "../models/userdata";
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  UserModel = new Userdata("Ayan","ayan@gmail.com",123,"Kolkata","12345","12345");
  dissable = true;
  succMsg = false;
  errMsg = false;
  constructor(
    private _userService : UserService
  ) { 
    this.checkConfirmPassword()
  }

  ngOnInit(): void {
  }

  checkConfirmPassword(){
    if(this.UserModel.password =="" || this.UserModel.password !== this.UserModel.confPassword){
      this.dissable = true;
    }else{
      this.dissable = false;
    }
  }

  async doRegister(){
    // this._userService.doRegister(this.UserModel).subscribe({
    //   next(position) {
    //     console.log('Current Position: ', position);
    //   },
    //   error(msg) {
    //     console.log('Error Getting Location: ', msg);
    //   },
    //   complete(){
    //     console.log("Process is done")
    //   }
    // })
    let self = this;
    this._userService.doRegister(this.UserModel).subscribe({
      next: (data: any) => {
        this.succMsg = data.message;
        self.errMsg = false;
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
      }
    });

  }

}
