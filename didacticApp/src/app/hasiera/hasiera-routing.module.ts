import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HasieraPage } from './hasiera.page';

const routes: Routes = [
  {
    path: '',
    component: HasieraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HasieraPageRoutingModule {}
