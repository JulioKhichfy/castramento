import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastramentoComponent } from '../cadastramento/cadastramento.component';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {path:'cadastramento', component: CadastramentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }