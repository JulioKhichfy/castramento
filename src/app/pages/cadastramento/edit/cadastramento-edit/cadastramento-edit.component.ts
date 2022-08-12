import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { StateService } from 'src/app/service/state.service';
import { PersonService } from '../../../../service/person.service';

@Component({
  selector: 'app-cadastramento-edit',
  templateUrl: './cadastramento-edit.component.html',
  styleUrls: ['./cadastramento-edit.component.css']
})
export class CadastramentoEditComponent implements OnInit {
  person:Person = new Person();
  ufs: string[] = [];
  constructor(private stateService:StateService,
              private personService:PersonService) { }
  
  ngOnInit(): void {
    console.log("CadastramentoEditComponent");
    this.ufs = this.stateService.getStates();
  }

  save(){
    //nao tem id então é novo
    console.log("estado: " + this.person.uf)
    console.log("nome: " + this.person.name)
    console.log("cpf: " + this.person.cpf)
    console.log("cidade: " + this.person.city)
    this.personService.save(this.person)
  }

  back(){

  }
}
