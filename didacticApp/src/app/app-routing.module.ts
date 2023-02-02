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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
