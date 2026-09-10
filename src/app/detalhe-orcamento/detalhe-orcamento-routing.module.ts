import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheOrcamentoPage } from './detalhe-orcamento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheOrcamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheOrcamentoPageRoutingModule {}
