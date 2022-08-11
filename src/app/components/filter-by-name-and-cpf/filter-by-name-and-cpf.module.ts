import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByNameAndCpfComponent } from './filter-by-name-and-cpf.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterByNameAndCpfComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FilterByNameAndCpfComponent]
})
export class FilterByNameAndCpfModule { }
