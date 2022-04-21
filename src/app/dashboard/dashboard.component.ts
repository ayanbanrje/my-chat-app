import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users:any;

  constructor(
    private user:UserService,
    
    private router: Router,
    ) {
   
   }
   

  ngOnInit(): void {
    this.user.getData().subscribe((data)=>{
      this.users=data;

  })

}
}
