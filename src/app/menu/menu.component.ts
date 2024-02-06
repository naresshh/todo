import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean = false;

  constructor(public service: HardcodedAuthenticationService) {
  }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.service.isUserLoggedIn();
    //console.log("Is user logged in " + this.isUserLoggedIn)
  }

}
