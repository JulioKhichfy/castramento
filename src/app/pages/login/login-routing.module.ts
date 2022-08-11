import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastramentoComponent } from '../cadastramento/cadastramento.component';

const loginRoutes: Routes = [
  {path:'cadastramento', component: CadastramentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }