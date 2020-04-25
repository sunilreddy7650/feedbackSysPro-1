import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms'; 
import { DataSource } from '@angular/cdk/table';
import { MatSnackBarModule, MatSnackBar, MatSnackBarRef } from '@angular/material';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-take-feed-back',
  templateUrl: './take-feed-back.component.html',
  styleUrls: ['./take-feed-back.component.css']
})
export class TakeFeedBackComponent implements OnInit {

  constructor(private newService : CommonService,public snackbar:MatSnackBar) { }
  Repdata;
  ptaaray;
  valbutton ='Save';
  NAword : string ='should be min 30 laters';
  Musn:string="matched";
  Fmessage: string = 'Feedback has already been submitted by this USN';
  Smessage: string = 'Thank You for the FeedBack';
  UMusn:string = 'Invalied USN  ex:1td19mca21'
  action : string = 'OK';
  Aword : string ='allow';
  flag:number = 0;
  
  
  
  //  public pieChartData = [120, 150, 180, 90,50,76];
  
   

  ngOnInit() {
    this.newService.GetUser().subscribe(data => { 
      this.Repdata = data;
    })
   
  }

  //usn vaildation
  onSave = function(user,isValid: boolean) {  

    let regExp =(/^[0-9]{1}[a-z A-Z]{2}[0-9]{2}[a-z A-Z]{2,3}[0-9]{2,3}$/);
    
    if(user.usn.match(regExp))
     {
      
        console.log("matched");
     }
     else
     {
       let snackBarRef = this.snackbar.open(this.UMusn,this.action,{ duration : 6000 }) ;
       console.log("not matched");
       
       snackBarRef.afterDismissed().subscribe(() =>{
         
        this.ngOnInit() 
        {
          location.reload()
        }
        
      })
      return;
     } 
       //fix the size of description
       var str =user.description.length;
       if(str<30)
       {
         console.log("not allow") ;
         let snackBarRef = this.snackbar.open(this.NAword,this.action,{ duration : 6000 }) ;
       console.log("not matched");
       
       snackBarRef.afterDismissed().subscribe(() =>{
         
        this.ngOnInit() 
        {
          location.reload()
          
        }
        
      })
      return;


       }
       else
       {
         console.log("allow");
       }
       


    
     //to find unqi
    for(var i=0;i<this.Repdata.length;i++)
    {
      if(this.Repdata[i].usn==user.usn)
         {
           
          this.flag=1;
           break;
           
         }
       }
       if(this.flag == 0)
       {
  
    user.mode= this.valbutton;  
    this.newService.saveUser(user).subscribe(data =>  {  
      alert(data.data);  
    }   
    , error => this.errorMessage = error )
    let snackBarRef = this.snackbar.open(this.Smessage,this.action,{ duration : 6000 }) ;
    snackBarRef.afterDismissed().subscribe(() =>{
      this.ngOnInit() 
      {
        location.reload()
      }
   

    })   
    snackBarRef.onAction().subscribe(() =>{
      this.ngOnInit() 
      {
        location.reload()
      }
      
    })   
    
   } 
   else
   {
     console.log('this is ecxecuting'+this.flag);
     let snackBarRef = this.snackbar.open(this.Fmessage,this.action,{ duration : 6000 }) ;
     snackBarRef.afterDismissed().subscribe(() =>{
      this.ngOnInit() 
      {
        location.reload()
      }
      
    })
     snackBarRef.onAction().subscribe(() =>{
      this.ngOnInit() 
      {
        location.reload()
      }
    })
   } 

  
     
   }

}



