import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        color: indianred;
        float: right;
      }
    `,
  ],
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValues) {
    console.log(formValues);
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
