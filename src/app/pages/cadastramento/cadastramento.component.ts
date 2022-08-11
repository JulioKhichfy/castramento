import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['./cadastramento.component.css']
})
export class CadastramentoComponent implements OnInit {

  public candidato: string | undefined;
  persons:Person[]=[];
  constructor(private personService:PersonService,
    private router:Router) { }

  ngOnInit(): void {
    this.candidato = "Julio Cesar Khichfy";
  }

  listAll(){
    this.router.navigate(['/persons']);
  }

}
