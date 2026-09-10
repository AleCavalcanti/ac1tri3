import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular';
import { OrcamentoService, Orcamento } from '../services/orcamento.service';
@Component({
  selector: 'app-confirmacao-reserva',
  templateUrl: './confirmacao-reserva.page.html',
  standalone: false,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, CommonModule]
})
export class ConfirmacaoReservaPage implements OnInit {
  orcamento: Orcamento | null = null;
  constructor(private orcamentoService: OrcamentoService, private router: Router) { }
  ngOnInit() {
    this.orcamento = this.orcamentoService.getOrcamentoAtual();
    if (!this.orcamento) {
      this.router.navigate(['/home']);
    }
  }
  verLista() {
    this.router.navigate(['/lista-orcamentos']);
  }
  novaReserva() {
    this.router.navigate(['/home']);
  }
}