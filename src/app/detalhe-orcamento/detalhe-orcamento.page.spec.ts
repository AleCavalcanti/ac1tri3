import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheOrcamentoPage } from './detalhe-orcamento.page';

describe('DetalheOrcamentoPage', () => {
  let component: DetalheOrcamentoPage;
  let fixture: ComponentFixture<DetalheOrcamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheOrcamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
