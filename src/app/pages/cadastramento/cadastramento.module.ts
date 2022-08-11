import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastramentoRoutingModule } from './cadastramento-routing.module';
import { CadastramentoComponent } from './cadastramento.component';
import { CadastramentoListComponent } from './list/cadastramento-list/cadastramento-list.component';
import { CadastramentoEditComponent } from './edit/cadastramento-edit/cadastramento-edit.component';
import { PersonService } from 'src/app/service/person.service';
import { FilterByNameAndCpfComponent } from './list/filter-by-name-and-cpf/filter-by-name-and-cpf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastramentoComponent,
    CadastramentoListComponent,
    CadastramentoEditComponent,
    FilterByNameAndCpfComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastramentoRoutingModule
  ],
  providers:[
    PersonService
  ]
})
export class CadastramentoModule { }
