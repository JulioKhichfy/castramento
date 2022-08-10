import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastramentoRoutingModule } from './cadastramento-routing.module';
import { CadastramentoComponent } from './cadastramento.component';
import { CadastramentoListComponent } from './list/cadastramento-list/cadastramento-list.component';
import { CadastramentoEditComponent } from './edit/cadastramento-edit/cadastramento-edit.component';
import { PersonService } from 'src/app/service/person.service';

@NgModule({
  declarations: [
    CadastramentoComponent,
    CadastramentoListComponent,
    CadastramentoEditComponent,
  ],
  imports: [
    CommonModule,
    CadastramentoRoutingModule
  ],
  providers:[
    PersonService
  ]
})
export class CadastramentoModule { }
