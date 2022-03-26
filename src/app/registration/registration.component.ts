import { Component, OnInit } from '@angular/core';
import { Userdata } from "../models/userdata"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  preData = new Userdata("Ayan","ayan@gmail.com",123,"Kolkata","12345");
  confirmPwd ="11";
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
