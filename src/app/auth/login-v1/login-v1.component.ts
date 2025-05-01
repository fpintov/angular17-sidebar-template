// src/app/auth/login-v1/login-v1.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-v1',
  imports: [],
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login-v1.component.scss'],
})
export class LoginV1Component {
  showPassword = false;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    console.log('Login submit');
    this.router.navigateByUrl('/app/home');
  }
}
