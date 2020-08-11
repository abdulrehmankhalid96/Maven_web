import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../../appservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-advice',
  templateUrl: './personal-advice.component.html',
  styleUrls: ['./personal-advice.component.css']
})
export class PersonalAdviceComponent implements OnInit {
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

  GotoNofi(){
    this.router.navigate(['/dashboard/publishnotification'])
  }
}
