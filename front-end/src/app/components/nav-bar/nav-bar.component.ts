import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookie:CookieService) { }
  user_login;
  token;
  ngOnInit() {
    this.user_login=this.cookie.get('user_login');
    this.token=this.cookie.get('token');
  }

}
