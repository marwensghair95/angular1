import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-dashboard',
  templateUrl: './update-dashboard.component.html',
  styleUrls: ['./update-dashboard.component.css']
})
export class UpdateDashboardComponent implements OnInit {
  UserForm: FormGroup;
  submited: boolean = false;
  id: any;

  userr;
  constructor(private router: ActivatedRoute, private route: Router, private UserServices: UserService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      id: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    });
    this.id = this.router.snapshot.paramMap.get('index');
    this.UserServices.getUsers().subscribe((response) => {
      this.userr = response;
      this.UserForm.patchValue(this.userr[this.id])
    });

  }
  submitUser() {
    this.submited = true;
    this.id = this.router.snapshot.paramMap.get('index');
    this.submited = true;
    if (this.UserForm.invalid) {
      return;
    } else {
      this.UserServices.updateUser(this.id, this.UserForm.value)
      this.route.navigateByUrl("dashboard");

    }

  }
}
