import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  title = 'Login';
  invalidUserMessage = '';
  isAuth:boolean = false;
  user:User = new User();

  constructor(private authService:AuthService,
              private router:Router) {
                this.user.email='user@email.com';
                this.user.password='123';
               }
  login(){
    console.log(this.user);
    this.isAuth = this.authService.login(this.user);
    if(this.isAuth){
      this.router.navigate(['/cadastramento']);
      this.invalidUserMessage = '';
    } else {
      this.invalidUserMessage = 'Email/Senha não encontrado(s)';
    }
  }

}
