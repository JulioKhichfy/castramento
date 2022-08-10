import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/service/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastramentoModule } from '../cadastramento/cadastramento.module';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CadastramentoModule,
    LoginRoutingModule
  ],
  exports:[],
  declarations: [
    LoginComponent
  ],
  providers:[
    AuthService
  ],
})
export class LoginModule { }