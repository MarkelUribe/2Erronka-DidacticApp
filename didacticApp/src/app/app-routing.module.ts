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
    path: 'Landako Gunea',
    redirectTo: 'hizki-sopa',
    pathMatch: 'full'
  },
  {
    path: 'Liburu eta Disko Azoka',
    redirectTo: 'laberintoa',
    pathMatch: 'full'
  },
  {
    path: 'Durangoko bonbardaketa',
    redirectTo: 'puzzlea',
    pathMatch: 'full'
  },
  {
    path: 'San Agustin Kultur Gunea',
    redirectTo: 'asmakizuna',
    pathMatch: 'full'
  },
  {
    path: 'San Faustoko Jaiak',
    redirectTo: 'urkatua',
    pathMatch: 'full'
  },
  {
    path: 'Santa Anako Arkua',
    redirectTo: 'hitz-ezkutua',
    pathMatch: 'full'
  },
  {
    path: 'Anbotoko Mariren Kondaira',
    redirectTo: 'anboto',
    pathMatch: 'full'
  },
  {
    path: 'hasiera',
    loadChildren: () => import('./hasiera/hasiera.module').then( m => m.HasieraPageModule)
  },
  {
    path: 'urkatua',
    loadChildren: () => import('./urkatua/urkatua.module').then( m => m.UrkatuaPageModule)
  },
  {
    path: 'hizki-sopa',
    loadChildren: () => import('./hizki-sopa/hizki-sopa.module').then( m => m.HizkiSopaPageModule)
  },
  {
    path: 'puzzlea',
    loadChildren: () => import('./puzzlea/puzzlea.module').then( m => m.PuzzleaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'hitz-ezkutua',
    loadChildren: () => import('./hitz-ezkutua/hitz-ezkutua.module').then( m => m.HitzEzkutuaPageModule)
  },  {
    path: 'laberintoa',
    loadChildren: () => import('./laberintoa/laberintoa.module').then( m => m.LaberintoaPageModule)
  },
  {
    path: 'anboto',
    loadChildren: () => import('./anboto/anboto.module').then( m => m.AnbotoPageModule)
  },
  {
    path: 'asmakizuna',
    loadChildren: () => import('./asmakizuna/asmakizuna.module').then( m => m.AsmakizunaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
