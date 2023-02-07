import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnbotoPage } from './anboto.page';

const routes: Routes = [
  {
    path: '',
    component: AnbotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnbotoPageRoutingModule {}
