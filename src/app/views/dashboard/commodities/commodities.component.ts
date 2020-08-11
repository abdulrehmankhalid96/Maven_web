import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AppserviceService } from '../../../appservice.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {
  public isAuth=false;
  public SelectedFileName=null;
  public modalRef;
  public array=['a','b','c','d','e','f'];
  public screenHeight;
  public screenWidth;
  public notifier;
  public commodities_Form:FormGroup;
  public submitted = false;
  public errorColor=false
  public AdviceImgError=false;
  public term;
  public p;
  public his;
  public x;
  public Images_base_Url='http://macho-cart.com/maven-server/';
  public Advoice_form:FormGroup;
  @ViewChild('myModal',{static:false}) myModal;
  @ViewChild('history',{static:false}) history;
  constructor(public modalService:ModalManager, public fb:FormBuilder, 
    public service:AppserviceService,
    public notifierService: NotifierService,
    public router:Router,
    private route: ActivatedRoute
    ){
    this.notifier = notifierService;
    
   }
   ngOnInit(): void {
     this.commodities_Form=this.fb.group({
       comm_name:['',Validators.required]
     })
     this.Advoice_form=this.fb.group({
       buy_if:['',Validators.required],
       Sell_if:['', Validators.required],
       take_profit:['',Validators.required],
       cut_loss:['',Validators.required],
       advoice_comm:['',Validators.required]
     })
     this.getAllCommodities();

   
  }
  onResize() {
    
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    let x={
      H:this.screenHeight,
      W:this.screenWidth
    }
    console.log(x);
 }
 public List_of_All_commodities:any;
public getAllCommodities=()=>{
  let x={
    auth_token:localStorage.getItem("auth_token"),
    user_id:localStorage.getItem("user_id")
  }
  this.service.get_all_Commodities(x).subscribe((res:any)=>{
    this.List_of_All_commodities=res.data;
    console.log(this.List_of_All_commodities);
  })
}
public ImageFile_of_commodity;
public Valid_file=false;
  fileCaptuer(event){
    let oninnerSection=false;
    this.SelectedFileName=event.target.files[0].name;
    this.ImageFile_of_commodity=event.target.files[0];
    let _validFileExtensions = ["image/png", "image/jpeg", "image/bmp", "image/gif"]; 
    for(let i=0;i<=3;i++){
      if(_validFileExtensions[i]==event.target.files[0].type){
        
       
        this.ImageFile_of_commodity=event.target.files[0];
        let kb=event.target.files[0].size/1000
        let mb=kb/1000;
       if(mb>3){
         this.Valid_file=false;
         this.errorColor=true;
         this.SelectedFileName='File Must Be less then 3 MBs'
       }
       else{
         this.Valid_file=true;
         this.errorColor=false;
         oninnerSection=true;
         this.SelectedFileName=event.target.files[0].name;
       }
      }
      else if(oninnerSection==false){
        console.log('Not Valid file');
        this.Valid_file=false;
        this.errorColor=true;
        this.SelectedFileName='Please Enter Valid File Type e.g PNG OR JPEG'
      }
    }
    console.log(event.target.files[0].name);
  }
  toggleCard=()=>{
    this.isAuth=!this.isAuth;
    this.submitted=false;
    this.errorColor=false;
    this.SelectedFileName=null;
    this.commodities_Form.reset();
  }
  expandContent = true;
  public PickedFile:any;
  public Advice_image:any=null;
  public Advice_image_name=null;
  public Adivce_Validator=false;
  fileCaptuer_2(event){
    this.Advice_image_name=event.target.files[0].name;
    this.Advice_image=event.target.files[0]
    console.log(event.target.files[0].name);
    let oninnerSection=false;
    let _validFileExtensions = ["image/png", "image/jpeg", "image/bmp", "image/gif"]; 
    for(let i=0;i<=3;i++){
      if(_validFileExtensions[i]==event.target.files[0].type){
        
       
        this.ImageFile_of_commodity=event.target.files[0];
        let kb=event.target.files[0].size/1000
        let mb=kb/1000;
       if(mb>3){
         this.Adivce_Validator=false;
         this.AdviceImgError=true;
         this.Advice_image_name='File Must Be less then 3 MBs'
       }
       else{
         this.Adivce_Validator=true;
         this.AdviceImgError=false;
         oninnerSection=true;
         this.Advice_image_name=event.target.files[0].name;
       }
      }
      else if(oninnerSection==false){
        console.log('Not Valid file');
        this.Valid_file=false;
        this.AdviceImgError=true;
        this.Adivce_Validator=false;
        this.Advice_image_name='Please attach valid file type e.g PNG OR JPEG'
      }
    }
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
get f() { return this.commodities_Form.controls; }
get g() { return this.Advoice_form.controls; }
public Advice_Id:any;
openModal(obj){
  this.Advice_Id=obj.comm_id

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
public AdviceHistory;
openModalHistory(adv){
this.AdviceHistory=adv;
  console.log(adv);

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

add_commodity(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.commodities_Form.invalid) {
    if(this.SelectedFileName==null){
      this.errorColor=true;
      this.SelectedFileName='File is Required'
       return;
     }
      return;
  }
 else if(this.SelectedFileName==null||  this.SelectedFileName =='File is Required' ){
   this.SelectedFileName='File is  Required';
   this.errorColor=true;
    return;
  }
  else if(this.Valid_file==false){
    return;
  }
  else{
    let x={
      comm_title:this.commodities_Form.controls['comm_name'].value,
      comm_attachment:this.ImageFile_of_commodity,
      auth_token:localStorage.getItem('auth_token'),
      user_id:localStorage.getItem('user_id')
    }
     let a=this.getFormData(x);
     this.service.add_commodity(a).subscribe((res:any)=>{
       console.log(res);
       if(res.status==true){
         this.toggleCard();
         this.getAllCommodities();
       }
     })
    console.log(x);
  }

}
add_advice(){
  this.submitted=true;
  if(this.Advoice_form.invalid){
    if(this.Advice_image_name==null){
      this.Advice_image_name="file is required";
      this.AdviceImgError=true;
    }
    return ;
  }
  if(this.Advice_image_name==null || this.Advice_image_name=='file is required'){
    this.Advice_image_name="file is required";
    this.AdviceImgError=true;
    return ;
  }
  else if(this.Adivce_Validator==false){
    return;
  }
  else if(this.Adivce_Validator==true){
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      comm_id:this.Advice_Id,
      by_if:this.Advoice_form.controls['buy_if'].value,
      sell_if:this.Advoice_form.controls['Sell_if'].value,
      take_profit_if:this.Advoice_form.controls['take_profit'].value,
      cut_loss_if:this.Advoice_form.controls['cut_loss'].value,
      adv_comments:this.Advoice_form.controls['advoice_comm'].value,
      adv_attachment:this.Advice_image
    }

    console.log(x);
    let a=this.getFormData(x);
    this.service.Add_Advoice(a).subscribe((res:any)=>{
      console.log(res);
      this.RestFormAdvice();
      this.getAllCommodities();
    })
  }
  
}
public RestFormAdvice=()=>{
  this.Advoice_form.reset();
  this.submitted=false;
  this.modalRef=this.modalService.close(this.myModal)
  this.Advice_image_name=null;
  this.Advice_image=null;
  this.AdviceImgError=false;
}

public Changing_status_of_commodity=(obj,obj2)=>{
  if(obj=='Disabled'){
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      comm_id:obj2.comm_id,
      status:'Enabled'
    }
    console.log(x);
    this.service.Commodity_status(x).subscribe((res:any)=>{
      console.log(res);
      this.getAllCommodities();
    })
  }
  else if(obj=='Enabled'){
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      comm_id:obj2.comm_id,
      status:'Disabled'
    }
    console.log(x);
    this.service.Commodity_status(x).subscribe((res:any)=>{
      console.log(res);
      this.getAllCommodities();
    })
  }
}

 getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}
}
