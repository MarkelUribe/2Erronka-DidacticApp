import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HitzEzkutuaPage } from './hitz-ezkutua.page';

const routes: Routes = [
  {
    path: '',
    component: HitzEzkutuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HitzEzkutuaPageRoutingModule {}
