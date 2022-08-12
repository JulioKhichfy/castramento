import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CadastramentoComponent } from './cadastramento.component';
import { CadastramentoEditComponent } from './edit/cadastramento-edit/cadastramento-edit.component';
import { CadastramentoListComponent } from './list/cadastramento-list/cadastramento-list.component';

const cadastramentoRoutes: Routes = [
  {path:'persons', component: CadastramentoListComponent},
  {path:'insert', component: CadastramentoEditComponent},
  {path:'cadastramento', component: CadastramentoComponent},
  {path:'', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cadastramentoRoutes)],
  exports: [RouterModule]
})
export class CadastramentoRoutingModule { }
