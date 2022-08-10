import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastramentoEditComponent } from './cadastramento-edit.component';

describe('CadastramentoEditComponent', () => {
  let component: CadastramentoEditComponent;
  let fixture: ComponentFixture<CadastramentoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastramentoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastramentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
