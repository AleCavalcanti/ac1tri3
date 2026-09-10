import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ConfirmacaoReservaPageRoutingModule } from './confirmacao-reserva-routing.module';

import { ConfirmacaoReservaPage } from './confirmacao-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoReservaPageRoutingModule
  ],
  declarations: [ConfirmacaoReservaPage]
})
export class ConfirmacaoReservaPageModule {}
