import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrkatuaPage } from './urkatua.page';

const routes: Routes = [
  {
    path: '',
    component: UrkatuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrkatuaPageRoutingModule {}
