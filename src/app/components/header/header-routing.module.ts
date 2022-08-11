import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastramentoComponent } from 'src/app/pages/cadastramento/cadastramento.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

const headerRoutes: Routes = [
  {path:'cadastramento', component: CadastramentoComponent},
  {path:'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
