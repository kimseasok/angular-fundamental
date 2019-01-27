import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {}

  login(formValues) {
    this.auth.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancelLogin() {
    this.router.navigate(['events']);
  }
}
