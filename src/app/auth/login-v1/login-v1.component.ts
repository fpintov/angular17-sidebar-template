// src/app/auth/login-v1/login-v1.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-v1',
  imports: [],
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login-v1.component.scss'],
})
export class LoginV1Component {

  showPassword = false;

  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    console.log('Username:', username);
    console.log('Password:', password);
    
    this.router.navigate(['/app/home']);
  }

}
