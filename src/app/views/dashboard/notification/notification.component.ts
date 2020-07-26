import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

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
  @ViewChild('myModal',{static:false}) myModal;
  @ViewChild('history',{static:false}) history;
  constructor(public modalService:ModalManager) { }

  ngOnInit(): void {
  }

  fileCaptuer(event){
    this.SelectedFileName=event.target.files[0].name
    console.log(event.target.files[0].name);
  }
  toggleCard=()=>{
    this.isAuth=!this.isAuth;
  }
  expandContent = true;
  public PickedFile:any;
  fileCaptuer_2(event){
    this.SelectedFileName=event.target.files[0].name
    console.log(event.target.files[0].name);
  }



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

}
