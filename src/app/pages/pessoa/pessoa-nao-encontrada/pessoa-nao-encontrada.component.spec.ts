import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaNaoEncontradaComponent } from './pessoa-nao-encontrada.component';

describe('PessoaNaoEncontradaComponent', () => {
  let component: PessoaNaoEncontradaComponent;
  let fixture: ComponentFixture<PessoaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaNaoEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
