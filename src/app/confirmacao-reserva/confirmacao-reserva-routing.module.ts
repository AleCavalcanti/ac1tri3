import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoReservaPage } from './confirmacao-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoReservaPageRoutingModule {}
