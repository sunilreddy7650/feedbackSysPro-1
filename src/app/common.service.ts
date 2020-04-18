import { Injectable } from '@angular/core';   
import {Http,Response, HttpModule } from '@angular/http';  
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';  
import {map} from 'rxjs/operators';
import { from } from 'rxjs';


@Injectable()  

export class CommonService  {
  
 constructor(private http : HttpClient) { }  
 
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)  
            .map((response: Response) =>response.json())           
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
            .map((response => response))           
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
            .map((response: Response) =>response.json())            
  }  
  
} 
