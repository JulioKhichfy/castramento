import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable()
export class PersonService {

  persons:Person[] = [
    {id:'1', name:'Pedro',      cpf:'11123303663',  uf:'RJ',  city:'Niterói'},
    {id:'2', name:'João',       cpf:'22234414774',  uf:'MG',  city:'Belo Horizonte'},
    {id:'3', name:'José',       cpf:'33345525885',  uf:'SP',  city:'São Paulo'},
    {id:'4', name:'Antonio',    cpf:'44456636995',  uf:'AC',  city:'Rio Branco'},
    {id:'5', name:'Fabio',      cpf:'55567747006',  uf:'PA',  city:'Belém'},
    {id:'6', name:'Guilherme',  cpf:'66678858117',  uf:'SC',  city:'Blumenau'},
  ]

  constructor() { }

  getPersons():Person[]{
    return this.persons;
  }
}
