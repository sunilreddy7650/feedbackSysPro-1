import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 
import { Long } from'bson' 
import { from } from 'rxjs';
const BSON = require('bson');

  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {
 

    
     
  constructor(private newService :CommonService,public dataservice:CommonService) { 

      this.dataservice.GetUser().subscribe(data =>{this.us = JSON.parse(JSON.stringify(data));
      
      
      });
      

    }  
   Repdata; 
   valbutton ="Save"; 
   us; 
   chrtdata;
   piedata;
   
   
   show: boolean = false;
                          
   public pieChartLabels = ['p-1','p-2','p-3','p-4','p-5','p-6','p-7','p-8','p-9','p-10',];
  
  //  public pieChartData = [120, 150, 180, 90,50,76];
  public pieChartData = [100,200,300,4000,5000];
   public pieChartType = 'pie';
   
    



   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(data => { 
    this.Repdata = data;  
     
  }) 
  
}  


  
}