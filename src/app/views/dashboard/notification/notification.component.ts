import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppserviceService } from '../../../appservice.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public isAuth=false;
  public SelectedFileName;
  public modalRef;
  public array=['a','b','c','d','e','f'];
  public submitted=false;
  public notificationForm:FormGroup;
  public AllNotfiactionData;
  public Images_base_Url='http://macho-cart.com/maven-server/';
  public x;
  public notiy;
  public p;
  @ViewChild('myModal',{static:false}) myModal;
  @ViewChild('history',{static:false}) history;
  constructor(public modalService:ModalManager, public fb:FormBuilder,public service:AppserviceService) { }

  ngOnInit(): void {
    this.notificationForm=this.fb.group({
      title:['',Validators.required],
      body:['',Validators.required]
    })
    this.getAllNotification();
  }

  public getAllNotification=()=>{
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token')
    }

    this.service.GetAllNotification(x).subscribe((res:any)=>{
      this.AllNotfiactionData=res.data;
      console.log(this.AllNotfiactionData);
    })

  }
  public WrongFileTypeErrorColor=false;
  public SelectedFile;
  public Selected_file_Size:any;
  get f() { return this.notificationForm.controls; }
  imgecapture(event){
    let oninnerSection=false;
    let _validFileExtensions = ["image/png", "image/jpeg", "image/bmp", "image/gif"]; 
        for(let i=0;i<=3;i++){
          if(_validFileExtensions[i]==event.target.files[0].type){
            console.log('Valid File');
            this.SelectedFileName=event.target.files[0].name;
            this.SelectedFile=event.target.files[0];
            let kb=event.target.files[0].size/1000
            let mb=kb/1000;
            this.Selected_file_Size=mb;
            console.log(mb);
            oninnerSection=true;
          }
          else{
            console.log('Not Valid file');
          }
        }
        if(oninnerSection==false){
          this.SelectedFileName='Please Enter Valid File Type e.g PNG OR JPEG';
          oninnerSection=false;
          this.WrongFileTypeErrorColor=true;
        }
        else if(oninnerSection==true){
          this.WrongFileTypeErrorColor=false;

        }
    
  }
  toggleCard=()=>{
    this.isAuth=!this.isAuth;
    this.SelectedFileName=null;
    this.submitted=false;
    this.notificationForm.reset();
  }
  expandContent = true;
  public PickedFile:any;




public selected;
eqular(i){
  console.log(i);
  if(i!=this.selected){
   this.selected=i;
  }
  else{
    this.selected=null;
  }

}

checker(i){

 if(i==this.selected){
   return true;
 }
 else{
   return false
 }
}

openModal(){
  // this.SelectedFileName=''
  this.modalRef = this.modalService.open(this.myModal, {
    size: "md",
    modalClass: "mymodal",
    hideCloseButton: false,
    centered: false,
    backdrop: true,
    animation: true,
    keyboard: false,
    closeOnOutsideClick: true,
    backdropClass: "modal-backdrop",

})

}
openModalHistory(){
  // this.SelectedFileName=''
  this.modalRef = this.modalService.open(this.history, {
    size: "lg",
    modalClass: "history",
    hideCloseButton: false,
    centered: false,
    backdrop: true,
    animation: true,
    keyboard: false,
    closeOnOutsideClick: true,
    backdropClass: "modal-backdrop",

})
}
closeModal(){
  this.modalService.close(this.modalRef);
}
submitnotifytion(){
  this.submitted=true;
  if(this.notificationForm.invalid){
    if(this.SelectedFileName==null){
      this.WrongFileTypeErrorColor=true
      this.SelectedFileName='file is required'
    }
    return
  }
  else if(this.SelectedFileName==null){
    this.WrongFileTypeErrorColor=true
    this.SelectedFileName='file is required';
    return;
  }
  else if(this.Selected_file_Size>3){
    this.WrongFileTypeErrorColor=true
    this.SelectedFileName='File Size must be less then 3 MB';
    return;
  }
  else{
  let x={
    title:this.notificationForm.controls['title'].value,
    body:this.notificationForm.controls['body'].value,
    attachment:this.SelectedFile,
    user_id:localStorage.getItem('user_id'),
    auth_token:localStorage.getItem('auth_token')
  }
  console.log(x);
  let a= this.getFormData(x);
this.service.CreateNewNotification(a).subscribe((res:any)=>{
  console.log(res);
  this.toggleCard();
  this.getAllNotification()
})
  }
}
getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}
}
