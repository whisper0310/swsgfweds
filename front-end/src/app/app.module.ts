import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { CookieService} from 'ngx-cookie-service';
import { routing} from './app.routes';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

import { DataService } from './services/data.service';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    AddProblemComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
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
    },
    CookieService],
  // put something in providers, it can be used every where
  bootstrap: [AppComponent]
})
export class AppModule { }
