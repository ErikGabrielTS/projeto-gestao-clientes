import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaClientes } from './tabela-clientes';

describe('TabelaClientes', () => {
  let component: TabelaClientes;
  let fixture: ComponentFixture<TabelaClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(TabelaClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
