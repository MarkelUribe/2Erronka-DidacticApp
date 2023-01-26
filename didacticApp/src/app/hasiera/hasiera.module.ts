import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HasieraPageRoutingModule } from './hasiera-routing.module';

import { HasieraPage } from './hasiera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HasieraPageRoutingModule
  ],
  declarations: [HasieraPage]
})
export class HasieraPageModule {}
