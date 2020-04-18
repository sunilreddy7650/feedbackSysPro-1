import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { TakeFeedBackComponent } from './take-feed-back/take-feed-back.component';
import { AppComponent } from './app.component';





const routes: Routes = [
  {path : 'res', component: ResultComponent},
  {path : 'takeFeed', component:TakeFeedBackComponent},
  {path : 'home' , component:AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
