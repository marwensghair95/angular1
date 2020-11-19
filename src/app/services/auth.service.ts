import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const test = users.find(use => use.email === user.email && use.password === user.password);
    if (test !== undefined) {
      localStorage.setItem('token', 'JWT');
      return true;
    } else { 
      return false; 
    }
  }
  
  logout() : void {
    localStorage.removeItem('token');
  }

  register(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token===null) {
      return false;
    }else{
      return true;
    }
   
  }
}
