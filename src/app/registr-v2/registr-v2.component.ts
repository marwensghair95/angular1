import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-registr-v2',
  templateUrl: './registr-v2.component.html',
  styleUrls: ['./registr-v2.component.css']
})



export class RegistrV2Component implements OnInit {
  registForm: FormGroup;
  submited: boolean = false;
  constructor(private AuthServices: AuthService, private route:Router) { }

  ngOnInit(): void {
     this.registForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      conPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
    },
  //   {
  //      validators: MustMatch('password', 'conPassword')
  // } 
    );
   
  }
  submitregister() {
    this.submited = true;
    if (this.registForm.invalid) {
      return;
    }
    this.AuthServices.register(this.registForm.value);
    this.route.navigateByUrl("/login");
    
  }
  
}
