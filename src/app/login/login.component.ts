import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  isValid: boolean = false;

  //Dependency Injection
  constructor(private router:Router,public service:HardcodedAuthenticationService){}

  handleLogin() {
    //console.log(this.username);
    if(this.service.authenticate(this.username,this.password)){
      this.isValid = false;
      this.router.navigate(['welcome',this.username]);
    } else {
      this.isValid = true;
    }

  }
}
