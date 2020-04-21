import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';    
import { AppComponent } from './app.component';  
import {CommonService} from './common.service';  
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ResultComponent } from './result/result.component';
import {MatCardModule} from '@angular/material/card' ;
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TakeFeedBackComponent } from './take-feed-back/take-feed-back.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { from } from 'rxjs';
@NgModule({  
  declarations: [  
    AppComponent, ResultComponent, TakeFeedBackComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,  HttpClientModule, ChartsModule,MatCardModule,MatTableModule,RouterModule,AppRoutingModule,
    MatToolbarModule,MatButtonModule,MatIconModule,MatGridListModule,MatSortModule,MatPaginatorModule,MatFormFieldModule,MatInputModule,
    BrowserAnimationsModule,MatSnackBarModule
  ],  
  providers: [CommonService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  