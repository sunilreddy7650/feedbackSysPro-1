import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms'; 

export interface feedBackRes {
  USN: string;
  Points: string;
  Description: string;  
  Delete;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  displayedColumns: string[] = ['USN','Points','Description','Action'];
  dataSource : MatTableDataSource<unknown>;
  arr:any[];
  ptaaray;
  Repdata;
  
  constructor(public newService:CommonService) { 
    

  }
  show: boolean = false;
                          
  public pieChartLabels = ['p-1','p-2','p-3','p-4','p-5','p-6','p-7','p-8','p-9','p-10',];
  public pieChartData;
  public pieChartType = 'pie';

  ngOnInit() {
    this.newService.GetUser().subscribe(data =>  this.Repdata = data)
      this.getdata();
      this.piedata();
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
  piedata()
  {
   this.newService.GetUser().subscribe(data =>{this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
     
   })
  } 
  getdata(){
    this.newService.GetUser().subscribe(data =>{this.ptaaray = data;
     
     var  arrray = [];
     var p1=0,p2=0,p3=0,p4=0,p5=0,p6=0,p7=0,p8=0,p9=0,p10=0;
     

      for (var i = 0 ; i < this.ptaaray.length;i++)
      {
        arrray.push(this.ptaaray[i].points);
        if (arrray[i] == 1)
            p1=p1+1;
            else if (arrray[i] == 2)
            p2=p2+1;
            else if (arrray[i] == 3)
            p3=p3+1;
            else if (arrray[i] == 4)
            p4=p4+1;
            else if (arrray[i] == 5)
            p5=p5+1;
            else if (arrray[i] == 6)
            p6=p6+1;
            else if (arrray[i] == 7)
            p7=p7+1;
            else if (arrray[i] == 8)
            p8=p8+1;
            else if (arrray[i] == 9)
            p9=p9+1;
            else if (arrray[i] == 10)
            p10=p10+1;
          

      }
        console.log(arrray);
        this.pieChartData = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];
        console.log(this.pieChartData);

        
        
       
        
    });
     
   
    
  
  
}
     
    //  const arrray:any[] = Array.of(this.ptaaray);
    //  console.log(arrray);
    //  for (var i=0;i<arrray.length;i++)
    //  {
       
        
    //  }
     
  
  
}

