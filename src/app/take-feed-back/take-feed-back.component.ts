import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms'; 
@Component({
  selector: 'app-take-feed-back',
  templateUrl: './take-feed-back.component.html',
  styleUrls: ['./take-feed-back.component.css']
})
export class TakeFeedBackComponent implements OnInit {

  constructor(private newService : CommonService,) { }
  Repdata;
  ptaaray;
  valbutton ="Save";
  
  
  //  public pieChartData = [120, 150, 180, 90,50,76];
  
   public pieChartType = 'pie';

  ngOnInit() {
    this.newService.GetUser().subscribe(data => { 
      this.Repdata = data;
    })
    
   
  }
  onSave = function(user,isValid: boolean) {    
  
    user.mode= this.valbutton;  
    this.newService.saveUser(user)  
    .subscribe(data =>  {  alert(data.data);  
         
      this.ngOnInit();    
    }   
    , error => this.errorMessage = error )  
      
  } 
}

