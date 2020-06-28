import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
  styles: [
    `
      em {
        float: right;
        padding-left: 20px;
        color: #4ca5c;
      }

      .error input {
        background-color: indianred;
        border: 1px solid #666;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    let firstName = new FormControl(
      this.authService.currentUser.firstName,
      Validators.required
    );
    let lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
    }
    this.router.navigate(['events']);
  }

  validateLastName() {
    return (
      this.profileForm.controls.lastName.valid ||
      !this.profileForm.controls.lastName.touched
    );
  }
}
