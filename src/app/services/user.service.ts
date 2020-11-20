import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  updateUser(id, UserForm) {
    this.getUsers().subscribe((response) => {
      this.users = response;
    });
    this.users.splice(id, 1, UserForm.value);
  }
  
}