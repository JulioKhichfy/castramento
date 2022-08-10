import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastramentoListComponent } from './cadastramento-list.component';

describe('CadastramentoListComponent', () => {
  let component: CadastramentoListComponent;
  let fixture: ComponentFixture<CadastramentoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastramentoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastramentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
