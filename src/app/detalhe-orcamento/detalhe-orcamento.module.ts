import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { DetalheOrcamentoPageRoutingModule } from './detalhe-orcamento-routing.module';

import { DetalheOrcamentoPage } from './detalhe-orcamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheOrcamentoPageRoutingModule
  ],
  declarations: [DetalheOrcamentoPage]
})
export class DetalheOrcamentoPageModule {}
