import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-filter-by-name-and-cpf',
  templateUrl: './filter-by-name-and-cpf.component.html',
  styleUrls: ['./filter-by-name-and-cpf.component.css']
})
export class FilterByNameAndCpfComponent implements OnInit {

  public person:Person = new Person();
  
  constructor() { 
   
  }

  ngOnInit(): void {
    
  }

  findUserByNameAndCPF(){
    console.log('Nome: ' + this.person.name + '-' + 'CPF: ' + this.person.cpf);
  }
}
