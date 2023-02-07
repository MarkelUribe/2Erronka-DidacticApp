import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaberintoaPage } from './laberintoa.page';

const routes: Routes = [
  {
    path: '',
    component: LaberintoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaberintoaPageRoutingModule {}
