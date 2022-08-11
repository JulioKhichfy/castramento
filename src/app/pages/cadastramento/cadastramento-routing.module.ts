import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastramentoListComponent } from './list/cadastramento-list/cadastramento-list.component';

const cadastramentoRoutes: Routes = [
  {path:'persons', component: CadastramentoListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cadastramentoRoutes)],
  exports: [RouterModule]
})
export class CadastramentoRoutingModule { }
