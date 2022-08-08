import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { PessoaFilterComponent } from './pessoa-filter/pessoa-filter.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaService } from '../../service/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PessoaNaoEncontradaComponent } from './pessoa-nao-encontrada/pessoa-nao-encontrada.component';
import { PessoasRoutingModule } from './pessoas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PessoasRoutingModule
    
  ],
  exports:[],
  declarations: [
    PessoaEditComponent,
    PessoaFilterComponent,
    PessoaListComponent,
    PessoaNaoEncontradaComponent
  ],
  providers:[
    PessoaService
  ],
  
})
export class PessoasModule { }