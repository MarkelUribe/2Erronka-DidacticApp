import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HitzEzkutuaPageRoutingModule } from './hitz-ezkutua-routing.module';

import { HitzEzkutuaPage } from './hitz-ezkutua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HitzEzkutuaPageRoutingModule
  ],
  declarations: [HitzEzkutuaPage]
})
export class HitzEzkutuaPageModule {}
