import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-filter-by-name-and-cpf',
  templateUrl: './filter-by-name-and-cpf.component.html',
  styleUrls: ['./filter-by-name-and-cpf.component.css']
})
export class FilterByNameAndCpfComponent  {

  nameFromFilter:string='';
  cpfFromFilter:string='';
  
  @Output() filterByNameAndCpf = new EventEmitter();
  @Output() all = new EventEmitter();

  constructor() { }

  findUserByNameAndCPF(){
    console.log('FilterByNameAndCpfComponent >>> Nome: ' + this.nameFromFilter + ' - ' + 'CPF: ' + this.cpfFromFilter);
    this.filterByNameAndCpf.emit({name:this.nameFromFilter, cpf:this.cpfFromFilter});
  }

  getAll(){
    console.log('>>>>>>> getAll')
    this.nameFromFilter='';
    this.cpfFromFilter='';
    this.all.emit("getAll");
  }
  
}
