import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaNaoEncontradaComponent } from './pessoa-nao-encontrada/pessoa-nao-encontrada.component';

const pessoasRoutes: Routes = [
  {path:'pessoas', component: PessoaListComponent},
  {path:'pessoa/:id', component: PessoaEditComponent},
  {path:'pessoaNaoEncontrado', component: PessoaNaoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(pessoasRoutes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
