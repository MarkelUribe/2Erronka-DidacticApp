import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnbotoPageRoutingModule } from './anboto-routing.module';

import { AnbotoPage } from './anboto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnbotoPageRoutingModule
  ],
  declarations: [AnbotoPage]
})
export class AnbotoPageModule {}
