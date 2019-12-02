import { Component } from '@angular/core';
import { AuthenticationService } from './auth/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assigment-ui';
  constructor(public authService: AuthenticationService, private router: Router) { }

  logout() {
      this.authService.logout();
      this.router.navigate(['login']);
  }
}
