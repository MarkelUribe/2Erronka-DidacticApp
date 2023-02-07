import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsmakizunaPageRoutingModule } from './asmakizuna-routing.module';

import { AsmakizunaPage } from './asmakizuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsmakizunaPageRoutingModule
  ],
  declarations: [AsmakizunaPage]
})
export class AsmakizunaPageModule {}
