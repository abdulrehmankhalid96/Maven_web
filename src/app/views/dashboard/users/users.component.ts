import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../../appservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public notiy;
public p;
  constructor(public service:AppserviceService,public router:Router,
    private route: ActivatedRoute,) { }
public AllUsers:any;
  ngOnInit(): void {
    
  
this.getAllAppUsers();
  }
public getAllAppUsers=()=>{
  let x={
    user_id:localStorage.getItem('user_id'),
    auth_token:localStorage.getItem('auth_token')
  }
 this.service.getAllAppUser(x).subscribe((res:any)=>{
    this.AllUsers=res.data; 
  console.log(res);
 })

}
goChat=(data)=>{
   console.log(data);
  this.router.navigate(['/dashboard/Chat' ,{ id: data.app_user_id}]);
}
public updateStatus=(data,data_2)=>{
  if(data=='UNBLOCKED'){
     let x={
       user_id:localStorage.getItem('user_id'),
       auth_token:localStorage.getItem('auth_token'),
       app_user_id:data_2,
       status:"BLOCKED"
     }
     this.service.UpdateAppUserStatus(x).subscribe((res:any)=>{
       console.log(res);
       this.getAllAppUsers();
     })
  }
  else if(data=='BLOCKED'){
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      app_user_id:data_2,
      status:"UNBLOCKED"
    }
    this.service.UpdateAppUserStatus(x).subscribe((res:any)=>{
      console.log(res);
      this.getAllAppUsers();
    })
  }
}
}
