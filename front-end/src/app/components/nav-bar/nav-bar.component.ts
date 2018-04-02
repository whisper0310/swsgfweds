import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookie:CookieService, private location:Location) { }
  user_login='false';
  token;
  ngOnInit() {
    this.user_login=this.cookie.get('user_login');
    this.token=this.cookie.get('token');
  }
  logout(){
      this.cookie.set('user_login','false');
      this.cookie.set('token',null);
      this.user_login=this.cookie.get('user_login');
      this.token=this.cookie.get('token');
      this.ngOnInit();
      // router to logout successful page
  }

}
