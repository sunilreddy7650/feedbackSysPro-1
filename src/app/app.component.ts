import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   

  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {
 

    
     
  constructor(private newService :CommonService,public dataservice:CommonService) { 

      this.dataservice.GetUser().subscribe(data =>{this.us = data;
      console.log(data);
      });
      

    }  
   Repdata; 
   valbutton ="Save"; 
   us; 
   chrtdata: Object[];
   piedata: any[];
   
   show: boolean = false;
                          
   public pieChartLabels = ['p-1','p-2','p-3','p-4','p-5','p-6','p-7','p-8','p-9','p-10',];
  
  //  public pieChartData = [120, 150, 180, 90,50,76];
  public pieChartData = [100,200,300,4000,5000];
   public pieChartType = 'pie';
   
    



   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(data => { 
    this.Repdata = data;  
     
  }) 
   this.getdata();
}  
getdata()
{
  
}



onSave = function(user,isValid: boolean) {    
  
  user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
  
this.id = kk._id;
this.usn = kk.usn;  
this.points= kk.points;  
this.description= kk.description;  
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}