import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.css']
})
export class LoginV2Component implements OnInit {
  loginForm: FormGroup;
  submited: boolean = false;
  constructor(private AuthServices: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  submitLog() {
    this.submited = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.AuthServices.login(this.loginForm.value)) {
      this.route.navigateByUrl("/dashboard");

    } else { console.log("mdp incorrect"); }

  }
}
