import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular';
import { OrcamentoService, Orcamento } from '../services/orcamento.service';
@Component({
  selector: 'app-lista-orcamentos',
  templateUrl: './lista-orcamentos.page.html',
  standalone: false,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, CommonModule]
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