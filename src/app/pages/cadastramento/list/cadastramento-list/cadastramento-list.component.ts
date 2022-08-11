import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PersonService } from '../../../../service/person.service';

@Component({
  selector: 'app-cadastramento-list',
  templateUrl: './cadastramento-list.component.html',
  styleUrls: ['./cadastramento-list.component.css']
})
export class CadastramentoListComponent implements OnInit {

  persons:Person[]=[];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

}
