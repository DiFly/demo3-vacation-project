import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  loginForm: FormGroup;
  forgotForm: FormGroup;
  forgotPassword = false;

  serverBadEmail = false;
  serverBadPassword = false;

  goodSendMailForForgotPassword = false;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.warn(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onSubmitForgotten() {
    console.warn(this.forgotForm.value);
    if (this.forgotForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotForm.value, null, 4));
  }

  changeForm() {
    this.forgotPassword = !this.forgotPassword;
    this.loginForm.reset();
    this.forgotForm.reset();
  }

}
