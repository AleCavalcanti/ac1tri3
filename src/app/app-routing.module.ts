import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'confirmacao-reserva',
    loadChildren: () => import('./confirmacao-reserva/confirmacao-reserva.module').then( m => m.ConfirmacaoReservaPageModule)
  },
  {
    path: 'detalhe-orcamento',
    loadChildren: () => import('./detalhe-orcamento/detalhe-orcamento.module').then( m => m.DetalheOrcamentoPageModule)
  },
  {
    path: 'lista-orcamentos',
    loadChildren: () => import('./lista-orcamentos/lista-orcamentos.module').then( m => m.ListaOrcamentosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
