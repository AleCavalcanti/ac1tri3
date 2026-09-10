import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonRange, IonButton } from '@ionic/angular/standalone';
import { OrcamentoService } from '../services/orcamento.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonRange, IonButton, CommonModule, FormsModule]
})
export class HomePage {
  valorDiaria: number = 100;
  dias: number = 1;
  constructor(private orcamentoService: OrcamentoService, private router: Router) { }
  continuar() {
    if (this.valorDiaria > 0 && this.dias > 0) {
      this.orcamentoService.setOrcamentoAtual(this.valorDiaria, this.dias);
      this.router.navigate(['/detalhe-orcamento']);
    }
  }
}