import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CadastramentoListComponent } from './list/cadastramento-list/cadastramento-list.component';

const cadastramentoRoutes: Routes = [
  {path:'persons', component: CadastramentoListComponent},
  {path:'', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cadastramentoRoutes)],
  exports: [RouterModule]
})
export class CadastramentoRoutingModule { }
