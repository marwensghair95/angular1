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
      return true;
    } else { 
      return false; 
    }
  }
  register(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
  }
}
