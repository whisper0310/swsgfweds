import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(@Inject("data") private data, private router:Router, private cookie:CookieService) { }

  email='';
  password='';
  login_res={};
  warning='';
  user_login='false';
  ngOnInit() {
  }
  onKey_email(value){
    this.email=value;
  }
  onKey_password(value){
    this.password=value;
  }
  login(){
    this.data.login(this.email,this.password).subscribe(
      data => {
        this.login_res=data;
        this.user_login= 'true';
        this.warning="";
        this.cookie.set('user_login','true');
        this.cookie.set('token',data.token);
        this.router.navigateByUrl('');

      },
        error => {
        console.log(error);
          this.cookie.set('user_login','false');
        this.warning="Please input correct email and password";
    });
  }
}

