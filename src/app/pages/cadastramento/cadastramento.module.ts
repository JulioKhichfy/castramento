import { HeaderModule } from './../../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastramentoRoutingModule } from './cadastramento-routing.module';
import { CadastramentoComponent } from './cadastramento.component';
import { CadastramentoListComponent } from './list/cadastramento-list/cadastramento-list.component';
import { CadastramentoEditComponent } from './edit/cadastramento-edit/cadastramento-edit.component';
import { PersonService } from 'src/app/service/person.service';
import { FormsModule } from '@angular/forms';
import { FilterByNameAndCpfModule } from 'src/app/components/filter-by-name-and-cpf/filter-by-name-and-cpf.module';
import { StateService } from '../../service/state.service';

@NgModule({
  declarations: [
    CadastramentoComponent,
    CadastramentoListComponent,
    CadastramentoEditComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastramentoRoutingModule,
    HeaderModule,
    FilterByNameAndCpfModule
  ],
  providers:[
    PersonService,
    StateService
  ]
})
export class CadastramentoModule { }
