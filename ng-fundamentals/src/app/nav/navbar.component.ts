import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      li > a.active {
        background-color: #e23337 !important;
        color: #2f353c !important;
      }
      .navbar {
        background-color: #2f353c !important;
        border: none;
      }
      .navbar a {
        color: Snow;
      }

      .navbar a:hover {
        background-color: #424b55;
      }
    `,
  ],
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
