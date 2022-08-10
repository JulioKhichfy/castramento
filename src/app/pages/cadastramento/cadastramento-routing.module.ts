import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastramentoComponent } from './cadastramento.component';

const cadastramentoRoutes: Routes = [
  //{path:'./', component: CadastramentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cadastramentoRoutes)],
  exports: [RouterModule]
})
export class CadastramentoRoutingModule { }
