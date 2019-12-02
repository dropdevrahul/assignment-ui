import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  inputUsername: String;
  inputPassword: String;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  login($event) {
    if(this.inputUsername && this.inputPassword) {
        this.authService.login(this.inputUsername, this.inputPassword);
    }
  }
  logout($event){
    this.authService.logout();
  }
}
