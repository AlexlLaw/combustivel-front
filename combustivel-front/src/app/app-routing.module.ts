import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'dsd',
    loadChildren: () =>
     import('./../app/features/feature-historico-combustivel/components/cadastro-combustivel/cadastro-combustivel.module')
     .then((m) => m.CadastroCombustivelModule)
  },
  {
    path: 'historico-combustivel',
    loadChildren: () =>
     import('./../app/features/feature-historico-combustivel/pages/historico-combustivel/historico-combustivel.module')
     .then((m) => m.HistoricoCombustivelModule)
  },
  {
    path: 'media-combustivel-municipio',
    loadChildren: () =>
     import('./../app/features/media-preco-combustivel/components/media-preco-combustivel/media-preco-combustivel.module')
     .then((m) => m.MediaPrecoCombustivelModule)
  },
  {
    path: 'distribuidoras',
    loadChildren: () =>
    import('./features/feature-dados-distribuidora/components/distribuidoras/distribuidoras.module')
    .then((m) => m.DistribuidorasModule)
  },
  {
    path: 'controle-municipio',
    loadChildren: () =>
    import('./features/feature-compra-venda-municipio/components/compra-venda-municipio/compra-venda-municipio.module')
    .then((m) => m.CompraVendaMunicipioModule)
  },
  {
    path: '**',
    loadChildren: () =>
        import('./features/feature-pagina-nao-encontrada/pagina-nao-encontrada/pagina-nao-encontrada.module').then(
            (m) => m.PaginaNaoEncontradaModule
        )
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
