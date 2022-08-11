import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByNameAndCpfComponent } from './filter-by-name-and-cpf.component';

describe('FilterByNameAndCpfComponent', () => {
  let component: FilterByNameAndCpfComponent;
  let fixture: ComponentFixture<FilterByNameAndCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByNameAndCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByNameAndCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
