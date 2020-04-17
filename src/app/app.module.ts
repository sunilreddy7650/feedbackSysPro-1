import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import {CommonService} from './common.service';  
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,  HttpClientModule, ChartsModule, 
  ],  
  providers: [CommonService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  