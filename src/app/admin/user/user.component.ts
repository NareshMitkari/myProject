import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  li:any;
  lis:any;
  p: number = 1;
  itemPerPage:number=6;
  total: number = 0;
  config:any;
  
  constructor(private service:UsersService) { 

     
  }

  ngOnInit(): void {
   this.getUsers();
  }

  
   getUsers(){
      this.service.getUsers(this.p).subscribe((response: any) => {
           this.li=response;
           this.lis=this.li.data;
           this.total=12;

           console.log(this.lis)
      });
  
  } 

  pageChangeEvent(event: number){
      this.p = event;
      this.getUsers();
  }

}
