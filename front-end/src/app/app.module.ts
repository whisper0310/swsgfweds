import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { routing} from './app.routes';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import { DataService } from './services/data.service';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    AddProblemComponent,
    NavBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    {
      provide:"data",
      useClass: DataService
    }],
  // put something in providers, it can be used every where
  bootstrap: [AppComponent]
})
export class AppModule { }
