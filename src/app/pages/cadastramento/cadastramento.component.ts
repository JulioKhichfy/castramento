import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['./cadastramento.component.css']
})
export class CadastramentoComponent implements OnInit {

  public candidato: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.candidato = "Julio Cesar Khichfy";
  }

}
