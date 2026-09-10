import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { OrcamentoService, Orcamento } from '../services/orcamento.service';
@Component({
  selector: 'app-detalhe-orcamento',
  templateUrl: './detalhe-orcamento.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonLabel, IonButton, CommonModule]
})
export class DetalheOrcamentoPage implements OnInit {
  orcamento: Orcamento | null = null;
  constructor(private orcamentoService: OrcamentoService, private router: Router) { }
  ngOnInit() {
    this.orcamento = this.orcamentoService.getOrcamentoAtual();
    if (!this.orcamento) {
      this.router.navigate(['/home']);
    }
  }
  voltar() {
    this.router.navigate(['/home']);
  }
  confirmar() {
    this.orcamentoService.salvarOrcamentoAtual();
    this.router.navigate(['/confirmacao-reserva']);
  }
}
