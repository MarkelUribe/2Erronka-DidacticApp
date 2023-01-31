import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrkatuaPageRoutingModule } from './urkatua-routing.module';

import { UrkatuaPage } from './urkatua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrkatuaPageRoutingModule
  ],
  declarations: [UrkatuaPage]
})
export class UrkatuaPageModule {}
