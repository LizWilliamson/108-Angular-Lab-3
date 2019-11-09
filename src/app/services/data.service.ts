import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor() { }

  public sayHello() {
    console.log("Hello from the other side.....of the service");
  }

  public saveUser(theNewUser) {
    this.users.push(theNewUser);
  }

  public getAllUsers() {
    return this.users;
  }
}
