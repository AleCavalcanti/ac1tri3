import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrcamentoService, Orcamento } from '../services/orcamento.service';
@Component({
  selector: 'app-lista-orcamentos',
  templateUrl: './lista-orcamentos.page.html',
  standalone: false
})
export class ListaOrcamentosPage implements OnInit {
  listaOrcamentos: Orcamento[] = [];
  constructor(private orcamentoService: OrcamentoService, private router: Router) { }
  ngOnInit() {
    this.carregarLista();
  }
  ionViewWillEnter() {
    this.carregarLista();
  }
  carregarLista() {
    this.listaOrcamentos = this.orcamentoService.getOrcamentos();
  }
  excluir(id: number) {
    this.listaOrcamentos = this.orcamentoService.excluirOrcamento(id);
  }
  voltar() {
    this.router.navigate(['/confirmacao-reserva']);
  }
}