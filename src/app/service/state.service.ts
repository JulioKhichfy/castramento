import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  states: string[] = ['RJ','MG','SP','SC','AC','TO','PE','PA','BA'];
  constructor() { }

  getStates():string[]{
    return this.states;
  }
}
