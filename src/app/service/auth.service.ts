import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable()
export class AuthService {

  isAuth:boolean = false;
  constructor() { }

  login(user:User):boolean{
    if(user.email === 'user@email.com' && user.password === '123'){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    return this.isAuth;
  }
}
